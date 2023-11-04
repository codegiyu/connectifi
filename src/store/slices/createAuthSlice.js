import { getDoc, setDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { auth, googleProvider } from "../../firebase/firebase";
import { applyActionCode, confirmPasswordReset, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, 
    signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";

const actionCodeSettings = {
    url: "http://localhost:5173/login",
    handleCodeInApp: true,
}

const createAuthSlice = (set, get) => ({
    user: null,
    isLoading: false,
    authIsOpen: false,
    activeAuthScreen: "register",
    openAuth: () => set({ authIsOpen: true }),
    closeAuth: () => set({ authIsOpen: false, activeAuthScreen: "register" }),
    openLoginScreen: () => set({ activeAuthScreen: "login" }),
    openRegisterScreen: () => set({ activeAuthScreen: "register" }),
    loginUser: async (obj) => {
        try {
            if (get().isLoading) return null;
            set({ isLoading: true })

            // Use firebase auth to check if email and password are correct and get user auth data
            const data = await signInWithEmailAndPassword(auth, obj.email, obj.password);
            console.log(data);
            const user = data.user;

            // Use user id from auth data to retrieve their data from the users collection
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);


            if (userDocSnap.exists()) {
                const userObj = userDocSnap.data();

                const thisUser = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser });
                return true;
            } else {
                console.log("No such user!");
                toast.error("User does not exist");
                return false;
            }

        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return null
        } finally {
            set({ isLoading: false })
        }
    },
    registerUser: async (obj) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true })

            // Create user in firebase auth
            const data = await createUserWithEmailAndPassword(auth, obj.email, obj.password)
            console.log(data)
            const user = data.user;

            const userDocRef = doc(db, "users", user.uid);

            // Create data for user in the users collection 
            const userObj = {
                first_name: obj.first_name,
                last_name: obj.last_name,
                email: obj.email,
                userid: user.uid,
                phone_number: "",
                photo: "",
                created_at: serverTimestamp(),
                modified_at: null
            }
            await setDoc(userDocRef, userObj)
            
            toast.success("Registered successfully");
            return true;
        } catch (err) {
            console.error(err);
            toast.error(err.message);
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
    googleSignIn: async () => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            googleProvider.addScope("profile");
            googleProvider.addScope("email");
            const data = await signInWithPopup(auth, googleProvider);
            const user = data.user;

            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userObj = userDocSnap.data();

                const thisUser = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser });
            } else {
                console.log("user: ", user);

                const userObj = {
                    first_name: user.displayName?.split(" ")[0] || "",
                    last_name: user.displayName?.split(" ")?.slice(1).join(" ") || "",
                    email: user.email || "",
                    userid: user.uid,
                    phone_number: user.phoneNumber || "",
                    photo: user.photoURL || "",
                    created_at: user.metadata.creationTime || null,
                    modified_at: null
                }

                await setDoc(userDocRef, userObj);

                set({ user: userObj });
                toast.success("Signed up successfully");
            }        

            return true;
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
    sendVerificationEmail: async () => {
        try {
            set({ isLoading: true });

            const user = auth.currentUser;
            console.log(user);

            if (user) {
                await sendEmailVerification(user, actionCodeSettings);
                return true;
            }

            return false;
        } catch (err) {
            console.error(err);
            toast.error(err.message);
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    completeEmailVerification: async (code) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            await applyActionCode(auth, code);
            return true;
        } catch (err) {
            console.error(err)
            // toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    sendPasswordResetEmail: async (email) => {
        try {
            set({ isLoading: true });

            await sendPasswordResetEmail(auth, email, actionCodeSettings);
            return true;
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    completePasswordReset: async (obj) => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });

            await confirmPasswordReset(auth, obj.code, obj.new_password);
            return true;
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    updatePassword: async (obj) => {
        try {
            const { user } = get()
            if (get().isLoading === true || user == null) return false;
            set({ isLoading: true });
            
            // const auth = getAuth();
            await signInWithEmailAndPassword(auth, user.email, obj.old_password);
            
            const authUser = auth.currentUser;
            if (authUser) {
                await updatePassword(authUser, obj.new_password);
    
                return true;
            }
            return false;
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
    updateUser: async (obj) => {
        try {
            if (get().isLoading === true || obj.changes.length === 0) return false;
            set({ isLoading: true });
            
            const userRef = doc(db, `users`, obj.userid);
            const userDetailsChanges = {};

            // Generate changes array
            for (const {property, newValue} of obj.changes) {
                userDetailsChanges[property] = newValue;
            }

            userDetailsChanges["modified_at"] = serverTimestamp();

            // Set the required field to the new value
            await updateDoc(userRef, userDetailsChanges);

            const userDocRef = doc(db, "users", obj.userid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userObj = userDocSnap.data();

                const thisUser = {
                    first_name: userObj.first_name,
                    last_name: userObj.last_name,
                    email: userObj.email,
                    userid: userObj.userid,
                    phone_number: userObj.phone_number,
                    photo: userObj.photo,
                    created_at: userObj.created_at,
                    modified_at: userObj.modified_at
                }

                console.log("User data:", userObj);
                set({ user: thisUser });
            }

            return true;
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
    logoutUser: async () => {
        try {
            if (get().isLoading === true) return false;
            set({ isLoading: true });
            
            await signOut(auth);

            set({ user: null });
            toast.success("Logged out successfully");
            return true;
        } catch (err) {
            console.error(err)
            toast.error(err.message)
            return false;
        } finally {
            set({ isLoading: false })
        }
    },
})

export default createAuthSlice;
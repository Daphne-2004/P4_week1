import express from "express";
import { createUser, 
         loginUser, 
         logoutCurrentUser, 
         getAllUsers, 
         getCurrentUserProfile, 
         updateCurrentUserProfile, 
         deleteUserById,
         getUserById,
         updateUserById,} from "../controllers/userController.js";
import {authenticate, authorizeAdmin} from "../middlewares/authentication.js";


const router = express.Router();

router.route('/').post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);
router.route('/profile').get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);
router.route('/:id')
      .delete(authenticate, authorizeAdmin, deleteUserById)
      .get(authenticate, getUserById)
      .put(authenticate, authorizeAdmin, updateUserById);

export default router;
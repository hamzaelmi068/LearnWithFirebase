import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


import { auth } from "./firebaseConfig.js";
import { storeToDoItem } from "./utilities/database/StoreToDoItem.js";
import { fetchAllToDoItems } from "./utilities/database/FetchAllToDoItems.js";
import { deleteToDoItem } from "./utilities/database/DeleteToDoItem.js";

export function editToDoItem(userId, uid, newText) {
    // Your code here to update the item in the database
}

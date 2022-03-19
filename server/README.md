#Server
|  HTTP Method  |    URI path  		 		  |    Description             |  Protected |  Role       |
| ------------- | ----------------------------|--------------------------- |------------|-------------|
|     POST		| /auth/login                 | login user, admin	       |	        | user, admin |
|     POST		| /auth/signup                | sign up user	           |	        | user, admin |
|     GET		| /items/getAllItems  		  | list of items    	       |	        | user, admin |
|     GET		| /items/getUserItems/:id  	  | User item   	           |	        | user, admin |
|     GET		| /items/getOneItem/:item_id  | item details 	           |	        | user, admin |
|     POST		| /items/createItem           | create item  	           |	        | user, admin |
|     PUT		| /items/updateLikeToItem/:itemId     | edit like 	       |	        | user, admin |
|     PUT		| /items/editItem/:item_id    | edit item  	               |	        | user, admin |
|     DELETE	| /items/deleteItem/:item_id  | delete item      	       |	        | user, admin |
|     GET	    | /rating/getAllComments      | show all comments  	       |	        | user, admin |
|     GET	    | /rating/getItemComments/:item_id | show comments for Item   |	        | user, admin |
|     GET	    | /rating/getUserComments/:userId | show user comments     |	        | user, admin |
|     GET	    | /rating/getItemComments/:ratingId | show item comments   |	        | user, admin |
|     POST	    | /rating/createComment/:itemId | create Comment           |	        | user, admin |
|     PUT	    | /rating/editComment/:id | edit comment                   |	        | user, admin |
|     DELETE    | /rating/deleteComment/:id | delete comments              |	        | user, admin |
|     POST	    | /rating/addRating/:id    | give like                     |	        | user, admin |
|     PUT	    | /user/editProfile    | edit Profile                      |	 :white_check_mark:       | user, admin |
|     DELETE    | /user/deleteUser/:user_id    | delete Use                |	 :white_check_mark:       | user, admin |
|     GET	    | /admin/getAllUsers    | show all Users                   |	 :white_check_mark:       | user, admin |
|     POST	    | /upload/image    | item image (CLOUDINARY)               |	        | user, admin |


const URL =  "http://localhost:4000/api";

export default {
    Login : URL + "/auth/signIn",
    SignUp : URL + "/auth/signUp",
    Add : URL + "/product/addProduct",
    OrderChange : URL + "/product/orderChange",
    FetchAll : URL + "/product/fetchAll",
    Update : URL + "/product/update",
    Delete : URL + "/product/delete",
    FetchOne : URL + "/product/fetchOne",
} 
import LoginContainer from "../login/LoginContainer";
import Paths from "./Paths";
import ListBooks from "../book/ListBooks";
import DetailBook from "../book/DetailBook";
import EditBook from "../book/EditBook";
import AddBook from "../book/AddBook";
import DetailUser from "../user/DetailUser";
import EditUser from "../user/EditUser";
import ListUsers from "../user/ListUsers";

const routes = [
  {
    path: Paths.Login,
    main: () => <LoginContainer></LoginContainer>,
  },
  {
    path: Paths.HomePage,
    exact: true,
    main: () => <h1>Trang chu</h1>,
  },
  {
    path: "/books",
    main: () => <ListBooks></ListBooks>,
  },
  {
    path: "/bookDetail",
    main: () => <DetailBook></DetailBook>,
  },
  {
    path: "/bookEdit",
    main: () => <EditBook></EditBook>,
  },
  {
    path: "/bookAdd",
    main: () => <AddBook></AddBook>,
  },
  {
    path: "/users",
    main: () => <ListUsers></ListUsers>,
  },
  {
    path: "/userDetail",
    main: () => <DetailUser></DetailUser>,
  },

  {
    path: Paths.UserEdit,
    main: () => <EditUser></EditUser>,
  },
];

export default routes;

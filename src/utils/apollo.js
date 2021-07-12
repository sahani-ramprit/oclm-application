import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL
});

const authLink = setContext(({ operationName }, prevCtx) => {
  const publicOperations = ["signin", "signup"];
  if (
    operationName &&
    !publicOperations.includes(operationName.toLowerCase())
  ) {
    const token = localStorage.getItem("user_token");
    return {
      headers: {
        ...prevCtx.headers,
        Authorization: `Bearer ${token}`
      }
    };
  }
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

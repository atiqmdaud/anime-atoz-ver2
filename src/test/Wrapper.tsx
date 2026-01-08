import { store } from "../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

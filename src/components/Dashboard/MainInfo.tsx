import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoTable from "./InfoTable";

const MainInfo:React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/dashboard" element={<InfoTable/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainInfo;
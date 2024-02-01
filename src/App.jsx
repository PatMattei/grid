import ContentContainer from "./components/ContentContainer"
import Navbar from "./components/Navbar"
import InputContainer from "./components/InputContainer"
import VisibleContextProvider from './VisibleContextProvider';


export default function App() {
return (
        <>
        <div className="container">
            <Navbar />
            <VisibleContextProvider>
                <ContentContainer />
                <InputContainer />
            </VisibleContextProvider>
        </div>
    </>
);
}
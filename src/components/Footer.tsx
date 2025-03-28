import LambdaLogo from "../../public/img/LambdaSquadLogo.png";

const Footer:React.FC = () => {
    return (
        <footer className="fixed-bottom bg-white border-top p-1">
            <div className="d-flex justify-content-center">
                <a href="/">
                    <img 
                        src={LambdaLogo} 
                        alt="Lambda Logo" 
                        className="img-fluid" 
                        style={{ maxHeight: '50px' }} 
                    />
                <p></p>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
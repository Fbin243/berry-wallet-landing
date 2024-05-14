import strawberry from "./assets/strawberry.svg";
import signIn from "./assets/imgs/BerryWallet Sign In.png";

const downloadUrl = "https://berry-wallet-landing.vercel.app/berry-wallet.zip";

const downloadFileName = "berry-wallet.zip";

function App() {
  const handleDownload = (url: string, fileName: string) => {
    console.log("url", url);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        console.log("blob", blob);
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };
  return (
    <>
      <div className="h-[60px] bg-primary-200 flex items-center px-10">
        <img className="me-4" src={strawberry} alt="React Logo" />
        <h1 className="text-primary-500">Berry Wallet</h1>
        <h1 className="text-primary-400 ms-auto hover:text-secondary-500 cursor-pointer">
          Download
        </h1>
      </div>
      <div className="flex justify-between items-center h-[calc(100vh-60px)] px-[100px]">
        <div className="flex flex-col gap-[60px]">
          <p className="font-semibold text-[60px]/[72px] gradient-text drop-shadow-md">
            Click download button <br /> to get the wallet app
          </p>
          <button
            className="text-primary-400 text-[26px]/[39px] font-semibold bg-primary-200 rounded-full w-[300px] h-[60px] hover:text-secondary-100 hover:bg-primary-400"
            onClick={() => handleDownload(downloadUrl, downloadFileName)}
          >
            Download
          </button>
          <ol className="text-primary-500 text-[26px]/[52px] font-semibold">
            <li>1. Open your browser</li>
            <li>2. Open Extension Management</li>
            <li>3. Turn on Developer mode</li>
            <li>4. Click Unpack extension</li>
            <li>5. Upload the file that you downloaded above</li>
          </ol>
        </div>
        <img src={signIn} alt="sign in screen" />
      </div>
    </>
  );
}

export default App;

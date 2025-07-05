import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import VotingABI from "./VotingABI.json";

const CONTRACT_ADDRESS = "0x212E7F64E6B83912b7B68a98c357A99A2E995ebe"; // kendi deployed adresin

function App() {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Cüzdan bağlantısı ve kontrat kurulumu
  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        const prov = new ethers.BrowserProvider(window.ethereum);
        const signer = await prov.getSigner();
        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);
        setProvider(prov);
        setContract(contractInstance);

        const fetchedCandidates = await contractInstance.getCandidates();
        setCandidates(fetchedCandidates);
      } else {
        alert("Lütfen Metamask kurun.");
      }
    };
    connectWallet();
  }, []);

  const vote = async () => {
    if (!selected) {
      alert("Lütfen bir aday seçin.");
      return;
    }
    try {
      const tx = await contract.vote(selected);
      await tx.wait();
      setMessage(`Oy verildi: ${selected}`);

    } catch (err) {
      console.error(err);
      setMessage("Oy verme başarısız oldu.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🗳️ Oy Verme Uygulaması</h2>
      {candidates.length > 0 ? (
        <div>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value="">Aday seç</option>
            {candidates.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button onClick={vote} style={{ marginLeft: 10 }}>
            Oy Ver
          </button>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
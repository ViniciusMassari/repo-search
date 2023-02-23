import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import Container from "./styles";
import { api } from "../services/api";
import { useState } from "react";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");


  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        setError("")
        return;
      } else{
        alert("Repositório já encontrado");
        setError("")
      }
    } catch (error) {
      setError("Erro !, tente novamente")
    }
   
   
  };



  const handleRemoveRepo = (id) => {
    const deleteRepo = repos.filter(repo => repo.id !== id)
    setRepos(deleteRepo)
  };

  return (
    <Container className="App">
      <img src={gitLogo} alt="github logo" width={72} height={72} />
      <Input 
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos ? repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} id={repo.id} handleRemoveRepo={handleRemoveRepo} />
      )):null}
    {error && <p>Error ! Try Again</p>}
    </Container>
  );
}

export default App;

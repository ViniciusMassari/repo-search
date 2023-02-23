/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo, id }) => {
const handleRemove = (e) =>{
  e.preventDefault();
  handleRemoveRepo(repo.id)
}


  return (
    <ItemContainer id={id}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Visit Repository
      </a>
      <a href="#" className="remover" rel="noreferrer" onClick={handleRemove}>
        Remove
      </a>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;

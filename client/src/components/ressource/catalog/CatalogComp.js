import React, { Component } from "react";
import MenuFilter from '../../menu/MenuFilter/MenuFilter';
import CommentButton from "../../button/CommentButton/CommentButton";
import MultipleSelector from "../../button/multipleselector/MultipleSelector";
import RessourceButton from "../../button/RessourceButton/RessourceButton";


class CatalogComp extends Component {

  render () {
      return(
        <div>
          <MenuFilter />
          <CommentButton />
          <RessourceButton />
          <MultipleSelector />
        </div>
    );
  }
}
export default CatalogComp;
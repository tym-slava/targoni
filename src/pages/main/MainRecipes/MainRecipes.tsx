import React from "react";
import Button from "../../../components/Button/Button";
import "../MainRecipes/MainRecipes.css";
import img1 from "../MainRecipes/recipe1.png";
import img2 from "../MainRecipes/recipe2.png";
import img3 from "../MainRecipes/recipe3.png";

function MainRecipes() {
  return (
    <section className="main-recipe">
      <div className="container">
        <h2 className="title">Найулюбленiшi рецепти</h2>
        <div className="row justify-content-between main-recipe-block">
          <div className="recipe-block col">
            <img src={img1} alt="" />
            <h6>reciepes1</h6>
            <div className="text-prevue">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, labore nihil est voluptas dolore aspernatur quam
              similique eum doloribus, animi quos laboriosam delectus distinctio
              facilis dolor id veniam nemo vel.
            </div>
          </div>
          <div className="recipe-block col">
            <img src={img2} alt="" />
            <h6>reciepes2</h6>
            <div className="text-prevue">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, labore nihil est voluptas dolore aspernatur quam
              similique eum doloribus, animi quos laboriosam delectus distinctio
              facilis dolor id veniam nemo vel.
            </div>
          </div>
          <div className="recipe-block col">
            <img src={img3} alt="" />
            <h6>reciepes3</h6>
            <div className="text-prevue">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, labore nihil est voluptas dolore aspernatur quam
              similique eum doloribus, animi quos laboriosam delectus distinctio
              facilis dolor id veniam nemo vel.
            </div>
          </div>
        </div>
        <Button
          // onClick={}
          color="white"
          title="Ще рецепти"
        />
      </div>
    </section>
  );
}

export default MainRecipes;

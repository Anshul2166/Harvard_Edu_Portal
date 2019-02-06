import React, { Component } from "react";
import Header from "../Header/Header";
import PostCommentForm from "./PostCommentForm/PostCommentForm";
import PostComments from "./PostComments/PostComments";

class SinglePost extends Component {
  render() {
    return (
      <div className="SinglePost">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8 SinglePost__col">
              <div className="SinglePost__wrapper">
                <div className="SinglePost__side-action">
                  <div className="SinglePost__upvote-wrapper">
                    <div className="SinglePost__upvote SinglePost__side-action-btn">
                      <i className="fas fa-arrow-up" />
                    </div>
                    <div className="SinglePost__vote-amount">2</div>
                    <div className="SinglePost__downvote SinglePost__side-action-btn">
                      <i className="fas fa-arrow-down" />
                    </div>
                  </div>
                </div>
                <div className="SinglePost__main-area">
                  <div className="SinglePost__main-area__post-info-wrapper">
                    <div className="SinglePost__main-area__post-info">
                      <div className="SinglePost__community-wrapper">
                        <div className="SinglePost__community-name">
                          r/Computer Enginering
                        </div>
                        <div className="SinglePost__author-name">
                          Posted by Samrat Luintel
                        </div>
                      </div>
                      <div className="SinglePost__post-title">
                        Captain America was a spy of Hydra
                      </div>
                      <div className="SinglePost__post-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam voluptate, qui molestias assumenda
                        praesentium ratione error tempore id tenetur illum,
                        laudantium explicabo ipsa a minima blanditiis quasi odio
                        officiis nostrum odit, fugit officia consequuntur. Sunt
                        similique qui, facilis eos sequi fuga debitis tenetur
                        modi nisi quasi ut dolorum ullam tempora unde
                        repudiandae culpa sint ea temporibus ipsa velit
                        voluptatum atque aperiam aliquid totam? Id quis, magnam
                        corrupti aperiam voluptatem ipsa suscipit sed nobis a
                        reprehenderit dolore quaerat placeat velit veritatis.
                        Mollitia quod sapiente incidunt eligendi nulla placeat.
                        Eum quas, voluptates, rerum rem doloribus harum vero
                        cum, inventore accusamus amet explicabo! Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Assumenda
                        nesciunt vel, reprehenderit cumque officiis voluptatem
                        minus nostrum. Placeat totam voluptatum aperiam,
                        adipisci amet qui deleniti in iure, praesentium
                        voluptates rerum, sint non distinctio odit ullam labore
                        voluptatibus excepturi a eligendi fugiat natus! Illo
                        officia, neque itaque veniam soluta fugiat dolore
                        quibusdam quaerat incidunt eligendi beatae amet ea autem
                        molestiae id nihil consequuntur cum exercitationem
                        molestias unde a ipsam excepturi. Facere maiores
                        voluptatibus ratione unde saepe? Blanditiis adipisci ut
                        magnam tenetur. Aut fugit architecto, assumenda ad
                        dignissimos eos voluptate alias reiciendis, cupiditate
                        aliquid aperiam temporibus laboriosam tempora eius.
                        Cumque, eligendi culpa?
                      </div>
                    </div>
                    <div className="SinglePost__post-additional-info">
                      <div className="SinglePost__comments SinglePost__post-additional-info__single-item">
                        <i className="fas fa-comments" /> 5 Comments
                      </div>
                    </div>
                    <PostCommentForm />
                    <PostComments />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SinglePost;

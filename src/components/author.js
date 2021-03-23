import React, { useState, useEffect, useRef } from "react";
// import Searcher from "./searcher";
import { useHistory, withRouter } from "react-router-dom";
const Author = (props) => {
  let username, email;
  const [state, setstate] = useState({
    edit: false,
  });
  const history = useHistory({});
  if (
    props.onMeQuery &&
    props.onAllAuthors &&
    props.onQueryBooks &&
    props.onHistory
  ) {
    const profile = (
      <div className="Author normalDiv fadeIn">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div style={{ borderRadius: "50%" }} className="Book_phto_cont">
              {props.onHistory.location.pathname.split("/")[2] ===
              props.onMeQuery.me.username ? (
                <img
                  // style={{}}
                  className="clickable"
                  src={require(`../assets/images/profileImage.jpeg`).default}
                  alt={"test1.jpg"}
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                ></img>
              ) : (
                <img
                  // style={{}}
                  style={{ backgroundColor: "white" }}
                  className="clickable"
                  src={require(`../assets/images/nofriend.png`).default}
                  alt={"test1.jpg"}
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                ></img>
              )}
            </div>
            <h1 style={{ textAlign: "center" }} className="text">
              {
                props.onAllAuthors.allAuthors.filter(
                  (item) =>
                    item.username ===
                    props.onHistory.location.pathname.split("/")[2]
                )[0].username
              }
            </h1>
            {props.onHistory.location.pathname.split("/")[2] ===
            props.onMeQuery.me.username ? (
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "1000",
                }}
              >
                {" "}
                Your profile was coded with <strong>❤</strong>
              </p>
            ) : (
              ""
            )}

            <p className="text">
              <b>email:</b>{" "}
              {
                props.onAllAuthors.allAuthors.filter(
                  (item) =>
                    item.username ===
                    props.onHistory.location.pathname.split("/")[2]
                )[0].email
              }
            </p>
            <p className="text">
              <b>Books:</b>{" "}
              {
                props.onQueryBooks.allBooks.filter(
                  (item) =>
                    item.author.username ===
                    props.onHistory.location.pathname.split("/")[2]
                ).length
              }
            </p>
            {props.onHistory.location.pathname.split("/")[2] ===
            props.onMeQuery.me.username ? (
              <div className="text" style={{ textAlign: "center" }}>
                <button
                  onClick={() => props.onEditAuthor("bioEdit")}
                  type="button"
                  className="btn btn-outline-light"
                >
                  Edit your profile <i className="fas fa-user-edit"></i>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {props.onAllAuthors.allAuthors.filter(
          (a) => a.username === props.onHistory.location.pathname.split("/")[2]
        )[0].love.length >= 1 ? (
          <React.Fragment>
            <h4
              // onClick={() =>
              //   console.log(
              //     props.onAllAuthors.allAuthors.filter(
              //       (a) =>
              //         a.username ===
              //         props.onHistory.location.pathname.split("/")[2]
              //     )[0].love
              //   )
              // }
              style={{
                marginLeft: "10px",
                marginTop: "30px",
                textAlign: "center",
              }}
              className="text"
            >
              Loved books by {props.onHistory.location.pathname.split("/")[2]}
            </h4>
            <div className="favoriteContainer">
              {props.onAllAuthors.allAuthors
                .filter(
                  (a) =>
                    a.username ===
                    props.onHistory.location.pathname.split("/")[2]
                )[0]
                .love.map((book) => (
                  <div
                    // onClick={() =>
                    //   console.log(
                    //     props.onQueryBooks.allBooks.filter(
                    //       (item) =>
                    //         item.author.username ==
                    //         props.onHistory.location.pathname.split("/")[2]
                    //     )
                    //   )
                    // }
                    key={book.id}
                    style={{ textAlign: "center", wordBreak: "break-word" }}
                    className="favorite text \"
                  >
                    <h6
                      onClick={() => history.push(`/book/${book.id}/`)}
                      className="clickable"
                    >
                      {book.name}
                    </h6>
                    <small>
                      Book written by{" "}
                      <b
                        onClick={() =>
                          history.push(`/author/${book.author.username}/`)
                        }
                        className="clickable"
                      >
                        {book.author.username}
                      </b>
                    </small>
                  </div>
                ))}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
        {props.onQueryBooks.allBooks.filter(
          (item) =>
            item.author.username ===
            props.onHistory.location.pathname.split("/")[2]
        ).length >= 1 ? (
          <React.Fragment>
            <h2
              // onClick={() => console.log(3)}
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                textAlign: "center",
              }}
              className="text"
            >
              Books published by{" "}
              {props.onHistory.location.pathname.split("/")[2]}
            </h2>
            {props.onQueryBooks.allBooks
              .filter(
                (item) =>
                  item.author.username ===
                  props.onHistory.location.pathname.split("/")[2]
              )
              .map((item) => (
                <Post key={item.id} onHistory={history} book={item}></Post>
              ))}
            {/* <Post></Post> */}
          </React.Fragment>
        ) : (
          ""
        )}
        <br></br>
      </div>
    );
    const bioEdit = (
      <form>
        <div>
          <h4 className="text">Update profile</h4>
          <label className="text" htmlFor="asdf">
            Username
          </label>
          <input
            // style={{ zIndex: "1000" }}
            ref={(node) => {
              username = node;
            }}
            placeholder="username"
            // onClick={openSearcher}
            className="input_style input_searcher"
            type="text"
            name="asdf"
          />
        </div>
        <div>
          <label className="text" htmlFor="asdf">
            Email
          </label>
          <input
            ref={(node) => {
              email = node;
            }}
            // style={{ zIndex: "1000" }}
            placeholder="email"
            // onClick={openSearcher}
            className="input_style input_searcher"
            type="text"
            name="asdf"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <small
            onClick={() => props.onEditAuthor(false)}
            className="clickable text"
            style={{
              paddingTop: "8px",
              marginRight: "8px",
              color: "green",
            }}
          >
            cancel
          </small>
          <button
            onClick={() => {
              props.onEditBio({
                variables: {
                  authorid: 12,
                  username: username.value,
                  email: email.value,
                },
              });
              // localStorage.setItem("token", "");
              props.onGoHome();
              // window.location.reload();
              // window.location.reload();
            }}
            type="button"
            className="btn btn-outline-light"
          >
            Update
          </button>
        </div>
        <br></br>
        <p className="text" style={{ textAlign: "center" }}>
          Looking to edit other things?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <small
            onClick={() => props.onEditAuthor("delete")}
            className="clickable text"
          >
            delete account
          </small>
          <small
            onClick={() => props.onEditAuthor("passEdit")}
            className="clickable text"
          >
            password
          </small>
        </div>
      </form>
    );
    const passEdit = (
      <form>
        <div>
          <h4 className="text">Update Password</h4>
          <label className="text" htmlFor="asdf">
            Old Password
          </label>
          <input
            // style={{ zIndex: "1000" }}
            placeholder="old password"
            // onClick={openSearcher}
            className="input_style input_searcher"
            type="text"
            name="asdf"
          />
        </div>
        <div>
          <label className="text" htmlFor="asdf">
            New Password
          </label>
          <input
            // style={{ zIndex: "1000" }}
            placeholder="new password"
            // onClick={openSearcher}
            className="input_style input_searcher"
            type="text"
            name="asdf"
          />
        </div>
        <div>
          <label className="text" htmlFor="asdf">
            New Password (Again)
          </label>
          <input
            // style={{ zIndex: "1000" }}
            placeholder="new password (again)"
            // onClick={openSearcher}
            className="input_style input_searcher"
            type="text"
            name="asdf"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <small
            onClick={() => props.onEditAuthor(false)}
            className="clickable text"
            style={{
              paddingTop: "8px",
              marginRight: "8px",
              color: "green",
            }}
          >
            cancel
          </small>
          <button type="button" className="btn btn-outline-light">
            Update password
          </button>
        </div>
        <br></br>
        <p className="text" style={{ textAlign: "center" }}>
          Looking to edit other things?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <small
            onClick={() => props.onEditAuthor("delete")}
            className="clickable text"
          >
            delete account
          </small>
          <small
            onClick={() => props.onEditAuthor("bioEdit")}
            className="clickable text"
          >
            username
          </small>
          <small
            onClick={() => props.onEditAuthor("bioEdit")}
            className="clickable text"
          >
            email
          </small>
        </div>
      </form>
    );
    const delEdit = (
      <form>
        <h4 className="text">Delete profile</h4>
        <div>
          <label className="text" htmlFor="asdf">
            Confirm your password
          </label>
          <input
            // style={{ zIndex: "1000" }}
            placeholder="new password (again)"
            // onClick={openSearcher}
            className="input_style input_searcher"
            type="text"
            name="asdf"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <small
            onClick={() => props.onEditAuthor(false)}
            className="clickable text"
            style={{
              paddingTop: "8px",
              marginRight: "8px",
              color: "green",
            }}
          >
            cancel
          </small>
          <button type="button" className="btn btn-outline-danger">
            Delete Account <i className="fas fa-exclamation-triangle"></i>
          </button>
        </div>
        <br></br>
        <p className="text" style={{ textAlign: "center" }}>
          Looking to edit other things?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <small
            onClick={() => props.onEditAuthor("bioEdit")}
            className="clickable text"
          >
            username
          </small>
          <small
            onClick={() => props.onEditAuthor("passEdit")}
            className="clickable text"
          >
            password
          </small>
          <small
            onClick={() => props.onEditAuthor("bioEdit")}
            className="clickable text"
          >
            email
          </small>
        </div>
      </form>
    );
    const editProfile = (
      <div className="Author normalDiv">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {props.editAuthor == false
            ? profile
            : props.editAuthor === "bioEdit"
            ? bioEdit
            : props.editAuthor === "passEdit"
            ? passEdit
            : delEdit}
        </div>
      </div>
    );

    return editProfile;
  }
  return <div></div>;
};

const Post = (props) => {
  return (
    <div
      onClick={() => props.onHistory.push(`/book/${props.book.id}/`)}
      className="postCont"
    >
      <div
        style={{
          cursor: "pointer",
          // paddingBottom: "100px",
        }}
        className="post"
      >
        <div
          style={{
            width: "200px",
            maxHeight: "200px",
            cursor: "pointer",
            // paddingBottom: "100px",
          }}
        >
          <img
            // onClick={() => props.book.onGoBook(props.book.item.id)}
            className="clickable"
            src={require(`../assets/images/comedia.jpeg`).default}
            alt={"test1.jpg"}
            style={{
              maxHeight: "100%",
              marginRight: "5px",
              borderRadius: "5px 0px 0px 5px",
              // marginBottom: "50px",
            }}
          ></img>
        </div>
        <div style={{ width: "300px" }} className="">
          <h4
            // onClick={() => props.book.onGoBook(props.book.item.id)}
            style={{ wordBreak: "break-all", marginTop: "10px" }}
            className="clickable"
          >
            {props.book.name}
          </h4>
          <small style={{ wordBreak: "break-all" }}>
            <b>Description:</b> {props.book.description}
          </small>
          <br></br>
          <small style={{ wordBreak: "break-all" }}>
            <b>Category:</b> {props.book.category}
          </small>
          <br></br>
          <small
            // onClick={() => console.log(props.book.item.love)}
            style={{ color: "gray" }}
          >
            Published ago {props.book.time}
          </small>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Author);

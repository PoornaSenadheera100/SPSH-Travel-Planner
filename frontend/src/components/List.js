import { useEffect, useState } from "react";
import axios from "axios";

export default function List(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    function getList() {
      axios
        .get(props.getURL)
        .then((res) => {
          setList(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getList();
  }, []);
  return (
    <>
      <center>
        <h1>{props.title}</h1>
      </center>
      {list.length === 0 && (
        <h2>
          No Records
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </h2>
      )}

      {list.length !== 0 && (
        <table className="table table-borderless">
          <tr>
            <th>
              <center>{props.column1name}</center>
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>

          <tbody>
            {list.map((item) => (
              <tr>
                <td>
                  <center>{item.name}</center>
                </td>

                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      window.location.replace(`${props.viewURL}/${item.email}`);
                    }}
                  >
                    View <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      window.location.replace(
                        `${props.updateURL}/${item.email}`
                      );
                    }}
                  >
                    Update <i class="fa fa-pencil"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      var response = window.confirm(
                        "Are you sure you want to delete this user?"
                      );
                      if (response) {
                        axios
                          .delete(`${props.deleteURL}/${item.email}`)
                          .then(() => {
                            alert(props.deleteMsg);
                            window.location.replace(props.afterDeleteURL);
                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }
                    }}
                  >
                    Delete <i class="fa fa-trash-o fa-lg"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

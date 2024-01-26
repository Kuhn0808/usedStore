import { getCookie } from "../../useCookies";
import { API_URL } from '../config/contansts';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function Registeredview(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const useId = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/product/registered`,{params:{id:useId.id}})
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("실패");
    });
  }, []);

  const [end ,setEnd] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      setTimeout(() => {
        setEnd("end");
      }, 400);

      return () => {
        setEnd("end2");
      };
    } else {
      setIsInitialLoad(false);
    }
  }, [isInitialLoad]);


  return(
    <div className="JSW_picklist">
      <div className="JSW_picklistname">등록된 상품</div>
      <div className="JSW_conentGridBox">
        {data.map((data, i)=> {
          return(
            <div className="JSW_liststart"
            key={data.id}>
              <Link to={`/detail/${data._id}`}>
                <div className="JSW_contentGridBox_img">
                  <img src={data.images[0]} width="100%"></img>
                </div>
                <div className="JSW_Aname">{data.title}</div>
                <div className="JSW_Aname">{data.comment}</div>
                <div className="JSW_Aname">{data.price}</div>
              </Link>
             
            </div>
          )
        })}
      </div>
   </div>
  )
}

export default Registeredview
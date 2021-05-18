import React, {useEffect, useState} from "react";
import {axiosInstance} from "../../services/api.axios";
import {Users} from "../users/Users";
import {Redirect} from "react-router-dom";
import {MyContext} from "../../routes";

export const Home = (props) => {
    // const [getData, setData] = useState();
    // useEffect(() => {
    //     axiosInstance.get('/users?page=1').then(value => {
    //         setData(value.data)
    //     })
    // }, [])
    // let dataApi;
    //
    // if (getData) {
    //     dataApi = getData;
    // }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                {
                    <MyContext.Consumer>
                        {
                            (val)=>{
                                console.log(val);
                                <Users val={val}/>
                            }
                        }
                    </MyContext.Consumer>
                }
            </div>
        </div>
    );
}

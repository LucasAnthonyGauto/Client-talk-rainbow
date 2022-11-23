import axios from "axios";
import { useEffect, useState } from "react";
import { Title } from "../../Component/Atoms";
import { PostCard } from "../../Component/Organisms";
import styles from "./styles.module.css";

const Page = () => {
  const [listPost, setListPost] = useState();

  const fetchPost = () => {
    axios
      .get("http://localhost:3000/api")
      .then((res) => {
        setListPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // console.log(listPost);
  return (
    <section>
      {listPost?.map((item, key) => (
        <PostCard
          key={key}
          id={item.id}
          date={item.date}
          name={item.name}
          comment={item.comment}
          color={item.color}
        />
      ))}
    </section>
  ) 
};

export default Page;

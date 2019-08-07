import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
  .background {
    height: 100%;
    width: 300px;
    background: #fff;
  }

  button.expand {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }

  .list {
    position: relative;
    list-style-type: none;
    top: 140px;
    left: 20px;
    width: 80%;
  }

  li.list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .avatar {
    border: 2px solid red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .content {
    width: 70%;
    height: 13px;
    border: 2px solid red;
    border-radius: 10px;
  }
`;

import React from "react";
import InputBox from "../components/input.component";
import { RiUserLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";

const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "Bienvenido de nuevo" : "Unete a nosotros"}
          </h1>
          {type !== "sign-in" ? (
            <InputBox
              icon={RiUserLine}
              name="name"
              type="text"
              placeholder="Nombre"
            />
          ) : (
            ""
          )}
          <InputBox
            icon={MdAlternateEmail}
            name="email"
            type="email"
            placeholder="Email"
          />
          <InputBox
            icon={BsKey}
            name="password"
            type="password"
            placeholder="contraseña"
          />

          <button className="btn-dark center mt-14" type="submit">
            {type.replace("-", " ")}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} alt="google icon" className="w-5" />
            contunuar con google
          </button>
          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              No tengo una cuenta?
              <Link
                to={"/signup"}
                className="underline text-black text-xl ml-1"
              >
                Únete a nosotros
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Ya eres miembro?
              <Link
                to={"/signin"}
                className="underline text-black text-xl ml-1"
              >
                Login aqui.
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;

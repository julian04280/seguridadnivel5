import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "home1",
    title: "Monitoreo inteligente y respuesta inmediata",
    desc: "Vigilancia física y tecnológica activa las 24 horas.",
    link: "/left-sidebar/collection ",
  }
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
                btnClass={"btn-gn5-main"}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;

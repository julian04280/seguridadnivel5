import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "home1",
    title: "Toda tu seguridad es un solo lugar.",
    desc: "Humana, tecnológica y en tiempo real.",
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

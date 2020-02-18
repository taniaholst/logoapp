import {Component} from "react";
import React from "react";
import ListOfImages from "./listofimages";
import docker from './images/docker.png'
import elm from './images/elm.svg'
import go from './images/go.png'
import java from './images/java.png'
import jupyter from './images/jupyter.png'
import kafka from './images/kafka.png'
import kotlin from './images/kotlin.png'
import kubeflow from './images/kubeflow.png'
import nodejs from './images/nodejs.svg'
import python from './images/python.png'
import r from './images/r.png'
import react from './images/react.png'
import rust from './images/rust.png'
import vue from './images/vue.png'

class ImageClass extends Component {
    render() {
        const images = [{
            photo: docker,
            text: "docker"
        }, {
            photo: elm,
            text: "elm"
        }, {
            photo: go,
            text: "go"
        }, {
            photo: java,
            text: "java"
        }, {
            photo: jupyter,
            text: "jupyter"
        }, {
            photo: kafka,
            text: "kafka"
        }, {
            photo: kotlin,
            text: "kotlin"
        }, {
            photo: kubeflow,
            text: "kubeflow"
        }, {
            photo: nodejs,
            text: "node"
        }, {
            photo: python,
            text: "python"
        }, {
            photo: r,
            text: "r"
        }, {
            photo: react,
            text: "react"
        }, {
            photo: rust,
            text: "rust"
        }, {
            photo: vue,
            text: "vue"

        }];

        const array = () => {
            return images.map((e, id) =>
                <ListOfImages
                    photo={e.photo}
                    text={e.text}
                    key={id}
                />
            )
        };
        console.log("lengde:", images.length);

        const randomItem = () => {
            return images[Math.floor(Math.random() * images.length)]
        };


        return (
            <div>
                {images.map((e, id) =>
                    <ListOfImages
                        photo={e.photo}
                        text={e.text}
                        key={id}
                    />
                )}
            </div>
        );
    }
}

export default ImageClass;

import {Component} from "react";
import React from "react";

class ListOfImages extends Component {
    render() {
        const images = [{
            photo: './images/docker.png',
            text: "docker"
        }, {
            photo: './images/go.png',
            text: "go"
        }, {
            photo: './images/java.png',
            text: "java"
        }, {
            photo: './images/jupyter.png',
            text: "jupyter"
        }, {
            photo: './images/kafka.png',
            text: "kafka"
        }, {
            photo: './images/kotlin.png',
            text: "kotlin"
        }, {
            photo: './images/kubeflow.png',
            text: "kubeflow"
        }, {
            photo: './images/nodejs.png',
            text: "node"
        }, {
            photo: './images/python.png',
            text: "python"
        }, {
            photo: './images/r.png',
            text: "r"
        }, {
            photo: './images/react.png',
            text: "react"
        }, {
            photo: './images/rust.png',
            text: "rust"
        }, {
            photo: './images/vue.png',
            text: "vue"
        }];


        return (
            <div>
{/*                {images.map((e, id) =>
                    <ListOfImages
                        photo={e.photo}
                        text={e.text}
                        key={id}
                    />
                )}*/}
            </div>
        );
    }
}

export default ListOfImages;

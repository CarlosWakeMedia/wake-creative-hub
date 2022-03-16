import React from 'react'
import styled from 'styled-components'

const ImageSVG = styled.svg`
      .cls-1 {
        fill: #fbb04b;
      }

      .cls-2 {
        fill: #f47f6b;
      }

      .cls-3 {
        fill: #31302e;
      }

      .cls-4, .cls-7 {
        fill: #f8eee2;
      }

      .cls-4, .cls-6, .cls-8 {
        stroke: #31302e;
        stroke-width: 1.5px;
      }

      .cls-4, .cls-5, .cls-6, .cls-8 {
        stroke-miterlimit: 10;
      }

      .cls-5, .cls-6 {
        fill: none;
      }

      .cls-5 {
        stroke: #0fa;
      }

      .cls-8 {
        fill: #e65a41;
      }
      .cloud1{
        transform: translateX(95%);
        animation: animCloud 30s infinite linear;
        animation-fill-mode: forwards;
      }
      .cloud2{
        transform: translateX(40%);
        animation: animCloud 35s infinite linear;
        animation-fill-mode: forwards;
    }
    .cloud3{
        transform: translateX(45%);
        animation: animCloud 45s infinite linear;
        animation-fill-mode: forwards;
      }
      .cloud4{
        transform: translateX(95%);
        animation: animCloud 40s infinite linear;
        animation-delay: 5s;
        animation-fill-mode: forwards;
      }
      .cloud5{
        transform: translateX(95%);
        animation: animCloud 60s infinite linear;
        animation-delay: 30s;
        animation-fill-mode: forwards;
      }
      @keyframes animCloud{
        to{
          transform: translateX(100%);
        }
        to{
          transform: translateX(-300%);
        }
      }
    @media(min-width:1024px){
      .cloud1{
        /* transform: translateX(95%); */
        animation: animCloud 110s infinite linear;
        animation-fill-mode: forwards;
      }
      .cloud2{
        transform: translateX(70%);
        animation: animCloud 100s infinite linear;
        animation-delay: 8s;
        animation-fill-mode: forwards;
      }
      .cloud3{
        /* transform: translateX(45%); */
        animation: animCloud 140s infinite linear;
        animation-fill-mode: forwards;
      }
      .cloud4{
        transform: translateX(95%);
        animation: animCloud 130s infinite linear;
        animation-delay: 15s;
        animation-fill-mode: forwards;
      }
      .cloud5{
        transform: translateX(195%);
        animation: animCloud 120s infinite linear;
        animation-delay: 20s;
        animation-fill-mode: forwards;
      }
    }
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 50vh;
    z-index: 10;
`

export default function CloudImage() {
  return (
    <ImageSVG id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" >
        <defs>
        </defs>
        <path className="cloud cloud3 cls-4" d="M983.4,200.56l-1.24-.16c-5.28-.74-11.34-2.89-12.75-8-1.21-4.39,1.86-9.06,5.91-11.14s8.8-2.14,13.35-1.95,9.21.59,13.57-.71c7.12-2.11,12.24-8.32,18.88-11.64,7-3.51,15.15-3.6,23-3.61l39.84-.05c4.51,0,9.46.15,12.84,3.13a18.83,18.83,0,0,1,4,6l3.62,7.28a9.53,9.53,0,0,1,1.37,4.52c-.14,3.58-3,5.9-6.62,5.91-3.23,0-4.73-.1-9.81,0a22.39,22.39,0,0,1-.23,5.33,6.27,6.27,0,0,1-4.36,3.64,18.92,18.92,0,0,1-5.87.36,593.25,593.25,0,0,0-64.37.79C1004.14,200.87,993.7,201.83,983.4,200.56Z" transform="translate(-0.76 -2.54)"/>
        <path className="cloud cloud2 cls-4" d="M841,52.35c2.55.43,5.11.81,7.69,1,10,.88,20-.56,30-.66s20.49,1.36,28.57,7.24c3.14,2.29,5.85,5.2,9.23,7.11,4.13,2.34,9,3,13.71,3.26,11.17.54,22.35-1.23,33.54-1.06s23,2.58,31.22,10.13c3.19,2.92,5.94,6.63,10,8,2.94,1,6.15.69,9.25.61,5.18-.15,10.52.46,15.06,3s8.12,7.16,8.22,12.34c.12,6.29-4.88,11.78-10.69,14.22s-12.31,2.47-18.61,2.47q-53.82,0-107.63,0l-108.18,0c-13.47,0-39.06,4.61-41.82-14.7a16.88,16.88,0,0,1,9-17c2.44-1.21,5.2-1.83,7.36-3.48C773,80.05,771.93,69,778.75,65.36c3.75-2,8.42-.89,12.5-2.08,4.89-1.43,8.17-5.88,12.33-8.81,6.31-4.45,14.53-5.24,22.21-4.53C830.9,50.42,835.94,51.49,841,52.35Z" transform="translate(-0.76 -2.54)"/>
        <path className="cloud cloud1 cls-4" d="M168.88,104.47c2.56.44,5.11.82,7.69,1,10,.88,20-.57,30-.66s20.49,1.35,28.57,7.24c3.15,2.29,5.85,5.19,9.24,7.11,4.12,2.33,9,3,13.7,3.25,11.18.54,22.35-1.22,33.54-1.06s23,2.58,31.23,10.13c3.18,2.92,5.93,6.63,10,8.05,2.93,1,6.14.7,9.25.61,5.17-.15,10.52.46,15.05,3s8.12,7.15,8.22,12.33c.13,6.3-4.88,11.78-10.69,14.22s-12.3,2.48-18.6,2.47l-107.64,0-108.17,0c-13.47,0-39.06,4.6-41.82-14.71a16.88,16.88,0,0,1,8.94-17c2.44-1.21,5.2-1.83,7.36-3.49,6.15-4.71,5.09-15.73,11.92-19.41,3.74-2,8.41-.88,12.5-2.08,4.88-1.43,8.16-5.88,12.32-8.81,6.31-4.44,14.53-5.23,22.22-4.52C158.79,102.54,163.82,103.61,168.88,104.47Z" transform="translate(-0.76 -2.54)"/>
        <path className="cloud cloud4 cls-4" d="M983.4,200.56l-1.24-.16c-5.28-.74-11.34-2.89-12.75-8-1.21-4.39,1.86-9.06,5.91-11.14s8.8-2.14,13.35-1.95,9.21.59,13.57-.71c7.12-2.11,12.24-8.32,18.88-11.64,7-3.51,15.15-3.6,23-3.61l39.84-.05c4.51,0,9.46.15,12.84,3.13a18.83,18.83,0,0,1,4,6l3.62,7.28a9.53,9.53,0,0,1,1.37,4.52c-.14,3.58-3,5.9-6.62,5.91-3.23,0-4.73-.1-9.81,0a22.39,22.39,0,0,1-.23,5.33,6.27,6.27,0,0,1-4.36,3.64,18.92,18.92,0,0,1-5.87.36,593.25,593.25,0,0,0-64.37.79C1004.14,200.87,993.7,201.83,983.4,200.56Z" transform="translate(-0.76 -2.54)"/>
        <path className="cloud cloud5 cls-4" d="M841,52.35c2.55.43,5.11.81,7.69,1,10,.88,20-.56,30-.66s20.49,1.36,28.57,7.24c3.14,2.29,5.85,5.2,9.23,7.11,4.13,2.34,9,3,13.71,3.26,11.17.54,22.35-1.23,33.54-1.06s23,2.58,31.22,10.13c3.19,2.92,5.94,6.63,10,8,2.94,1,6.15.69,9.25.61,5.18-.15,10.52.46,15.06,3s8.12,7.16,8.22,12.34c.12,6.29-4.88,11.78-10.69,14.22s-12.31,2.47-18.61,2.47q-53.82,0-107.63,0l-108.18,0c-13.47,0-39.06,4.61-41.82-14.7a16.88,16.88,0,0,1,9-17c2.44-1.21,5.2-1.83,7.36-3.48C773,80.05,771.93,69,778.75,65.36c3.75-2,8.42-.89,12.5-2.08,4.89-1.43,8.17-5.88,12.33-8.81,6.31-4.45,14.53-5.24,22.21-4.53C830.9,50.42,835.94,51.49,841,52.35Z" transform="translate(-0.76 -2.54)"/>
    </ImageSVG>
  )
}
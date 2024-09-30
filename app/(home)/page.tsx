'use client';
import React, { useState, useEffect, useRef } from "react";
import '../globals.css';
import {UploadControl} from "@/fsd/widgets/upload-control";



export default function HomePage() {


  return (
    <div >
      Главная страница
      <hr/>
      Это публичная страница,
      <hr/>
      контент на ней виден всем пользователям
      <hr/>
      не зависимо от того есть ли у них wb-api-key
    </div>
  );
}

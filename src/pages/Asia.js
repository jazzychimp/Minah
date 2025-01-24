import "../style.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState, useRef } from "react";
import "leaflet-easybutton";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Asia() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); // Modal content state
  const [modalTitle, setModalTitle] = useState(""); // Modal title state
  const [modalImage, setModalImage] = useState(""); // Modal image state
  const navigate = useNavigate(); // Initialize the navigation function

  const markers = [
    {
      geocode: [37.56588056134681, 126.94391243776309],
      popUp: "SK Global",
      imageUrl: "/images/sk.jpg", // Optional image for each marker
      description:
        "Your square head looks so smelly. I'm very grateful for the three months we had together. I had so much fun.",
    },
    {
      geocode: [37.56650200174031, 126.92814015897962],
      popUp: "Grain",
      imageUrl: "/images/brunch.jpg", // Optional image for each marker
      description:
        "Your fly is open a lot. I want to start pantsing you. Finding brunch around the city after golf class was the best.",
    },
    {
      geocode: [37.57226180097846, 126.93927767493209],

      imageUrl: "/images/golf.jpg", // Optional image for each marker
      description:
        "Isn't it crazy that we both signed up for golf? I was so excited to see you in my class when I walked in. It was meant to be.",
      popUp: "Golf Class",
    },
    {
      geocode: [37.557971316403844, 126.93664518511522],

      imageUrl: "/images/boss.jpg", // Optional image for each marker
      description:
        "Your tolerance used to be crazy high in Korea. Let's bring that back this year.",
      popUp: "Boss Pocha",
    },
    {
      geocode: [20.85, 107.081],

      imageUrl: "/images/vm.jpg", // Optional image for each marker
      description:
        "I have loved you since day one without really even knowing you. I know quite a bit about you, and I'm looking forward to learning everything about you.",
      popUp: "Ha Long Bay",
    },
    {
      geocode: [21.035, 105.852],

      imageUrl: "/images/beer.jpg", // Optional image for each marker
      description:
        "Two things I love doing: telling you how much I love you and sweaty sex.",
      popUp: "Beer Street",
    },
    {
      geocode: [13.733, 100.567],

      imageUrl: "/images/th.jpg", // Optional image for each marker
      description:
        "On your last day, I remember you trying to drag me to the bathroom to have sex. I like brushing my boobs against your arm.",
      popUp: "EmSphere",
    },
    {
      geocode: [13.743, 100.556],

      imageUrl: "/images/pastel.jpg", // Optional image for each marker
      description:
        "This was on the way to Pastel. Your hand and face is so swollen. Next time we are in Thailand, let's get a really nice place to stay.",
      popUp: "Pastel aka The Worst Restaurant in the World",
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("../images/pin.png"),
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true),
    });
  };

  // Handle opening the modal on marker click and set specific content
  const openModal = (marker) => {
    setModalTitle(marker.popUp); // Set the title from the marker
    setModalContent(marker.description); // Set the description from the marker
    setModalImage(marker.imageUrl); // Set the image from the marker
    setIsModalOpen(true); // Open the modal
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(""); // Clear content when closing
    setModalTitle(""); // Clear title when closing
    setModalImage(""); // Clear image when closing
  };

  const easyButtonRef = useRef(null); // Create a reference for the EasyButton

  // Add EasyButton after the map is initialized
  function MapWithEasyButton() {
    const map = useMap(); // Get the map instance

    useEffect(() => {
      if (!easyButtonRef.current) {
        // Create EasyButton only once
        const easyButton = L.easyButton("fa fa-home", function () {
          // Navigate to /pages/Home.js when clicked
          navigate("/"); // Use navigate function from react-router-dom
        });

        easyButton.addTo(map); // Add the button to the map
        easyButtonRef.current = easyButton; // Store the button reference
      }
    }, [map, navigate]); // Add navigate as a dependency to ensure it updates

    return null; // This component does not render anything itself
  }

  return (
    <div>
      <MapContainer center={[36.17471185004605, 101.0546874009]} zoom={4}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.jpg" />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker, index) => {
            return (
              <Marker
                key={index}
                position={marker.geocode}
                icon={customIcon}
                eventHandlers={{
                  click: () => openModal(marker), // Open modal on marker click
                }}
              />
            );
          })}
        </MarkerClusterGroup>
        <MapWithEasyButton /> {/* Add the EasyButton component here */}
      </MapContainer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Marker Info Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/stamp.png`}
          // Specify the image URL you want to display in the top-right corner
          alt="Top-right Image"
          className="top-right-image"
        />
        <div className="modal-content">
          <div className="modal-image-container">
            <img
              src={`${process.env.PUBLIC_URL}${modalImage}`}
              alt={modalTitle}
              className="modal-image"
            />
          </div>
          <div className="modal-text">
            <h2 className="modal-title">{modalTitle}</h2>
            <p className="modal-description">{modalContent}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

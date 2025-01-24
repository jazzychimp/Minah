import "../style.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  Marker,
  useMap, // Import useMap hook
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState, useRef } from "react";
import "leaflet-easybutton"; // Import EasyButton
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Modal from "react-modal";
import L from "leaflet"; // Needed for Leaflet EasyButton
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

Modal.setAppElement("#root");

export default function NorthAmerica() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); // Modal content state
  const [modalTitle, setModalTitle] = useState(""); // Modal title state
  const [modalImage, setModalImage] = useState(""); // Modal image state
  const navigate = useNavigate(); // Initialize the navigation function

  // List of markers with associated content
  const markers = [
    {
      geocode: [47.713239, -122.071083],
      popUp: "Bop's House",
      imageUrl: "/images/woodinville.jpg", // Optional image for each marker
      description:
        "I sleep so well when I'm with you. I think I average around 15 hours of sleep per day when I'm at your house.",
    },
    {
      geocode: [47.970403, -123.494042],
      popUp: "Hurricane Ridge",
      imageUrl: "/images/ridge.jpg", // Optional image for each marker

      description:
        "Washington has pretty mountains. It was funny when your Dad started making fun of the Koreans while the windows were down.",
    },
    {
      geocode: [47.6116, -122.2039],
      popUp: "Downtown Bellevue",

      imageUrl: "/images/bellevue.jpg", // Optional image for each marker
      description: "I guess your Mom wouldn't like this...",
    },
    {
      geocode: [37.77309744154748, -122.43718845098113],
      popUp: "San Francisco",

      imageUrl: "/images/sf.jpg", // Optional image for each marker
      description:
        "Your sister would say we look enby in this picture. Do you like that I'm your first masc? ",
    },
    {
      geocode: [40.769173534189626, -73.98571474033369],
      popUp: "NYC",

      imageUrl: "/images/nyc.jpg", // Optional image for each marker
      description:
        "Spending one day with you felt like a week. I love hanging out with you. We will soon be with each forever. ",
    },
    {
      geocode: [25.748119619477823, -80.26391746400049],
      popUp: "BOP HQ",

      imageUrl: "/images/fl.jpg", // Optional image for each marker
      description:
        "I hope the appointment in March will fix your sleepiness. I really don't like when you are sleepy or tired.",
    },
    {
      geocode: [38.71696216361112, -77.22039351984536],
      popUp: "Brick City",

      imageUrl: "/images/lorton.jpg", // Optional image for each marker
      description:
        "You are so adorable. Thanks for coming to Lorton. I'm glad you came before my Mom got mad.",
    },
    {
      geocode: [49.283243785649894, -123.12459434264103],
      popUp: "Porsche City",

      imageUrl: "/images/ca.jpg", // Optional image for each marker
      description:
        "I couldn't stop kissing you while you were sleeping the night before. I know you needed rest, but I just couldn't control myself. It's your fault for being so cute.",
    },
    // Add other markers here...
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

  // Add EasyButton once when the map is initialized using useRef
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
      <MapContainer center={[39.49718173849554, -103.13380669287805]} zoom={4}>
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

// Room objects
const rooms = [
  {
    name: "Living Room",
    currTemp: 32,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/living-room.jpg",
    airConditionerOn: false,
    startTime: '16:30',
    endTime: '20:00',

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp > 10 ? this.currTemp-- : this.currTemp;
    },

    increaseTemp() {
      this.currTemp < 32 ? this.currTemp++ : this.currTemp;
    },
    toggleAircon() {
      this.airConditionerOn
        ? (this.airConditionerOn = false)
        : (this.airConditionerOn = true);
    },
  },
  {
    name: "Kitchen",
    currTemp: 29,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/kitchen.jpg",
    airConditionerOn: false,
    startTime: '16:30',
    endTime: '20:00',

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp > 10 ? this.currTemp-- : this.currTemp;
    },

    increaseTemp() {
      this.currTemp < 32 ? this.currTemp++ : this.currTemp;
    },
    toggleAircon() {
      this.airConditionerOn
        ? (this.airConditionerOn = false)
        : (this.airConditionerOn = true);
    },
  },
  {
    name: "Bathroom",
    currTemp: 30,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/bathroom.jpg",
    airConditionerOn: false,
    startTime: '16:30',
    endTime: '20:00',

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp > 10 ? this.currTemp-- : this.currTemp;
    },

    increaseTemp() {
      this.currTemp < 32 ? this.currTemp++ : this.currTemp;
    },
    toggleAircon() {
      this.airConditionerOn
        ? (this.airConditionerOn = false)
        : (this.airConditionerOn = true);
    },
  },
  {
    name: "Bedroom",
    currTemp: 31,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/bedroom.jpg",
    airConditionerOn: false,
    startTime: '16:30',
    endTime: '20:00',

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp > 10 ? this.currTemp-- : this.currTemp;
    },

    increaseTemp() {
      this.currTemp < 32 ? this.currTemp++ : this.currTemp;
    },
    toggleAircon() {
      this.airConditionerOn
        ? (this.airConditionerOn = false)
        : (this.airConditionerOn = true);
    },
  },
];

setInterval(()=> {
  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });

  rooms.forEach((room) => {
    if(room.startTime === currentTime){
      !room.airConditionerOn && room.toggleAircon();
      generateRooms(); 
    }else if(room.endTime === currentTime){
      room.airConditionerOn && room.toggleAircon();
      generateRooms(); 
    }
  } );
}, 60000);

const coolOverlay= `linear-gradient(
    to bottom,
    rgba(141, 158, 247, 0.2),
    rgba(194, 197, 215, 0.1)
  )`; //should be applied to the room image if temp is high after clicking on cool

const warmOverlay = `linear-gradient(to bottom, rgba(236, 96, 98, 0.2), rgba(248, 210, 211, 0.13))`;

const setOverlay = (room) => {
  document.querySelector(".room").style.backgroundImage = `${//change linear gradient based on clicked overlay
    room.currTemp < 25 ? coolOverlay : warmOverlay
  }, url('${room.image}')`;
};

// Set svg accordingly
const svgPoint = document.querySelector(".point");
const angleOffset = 86;
const calculatePointPosition = (currTemp) => {
  const normalizedTemp = (currTemp - 10) / (32 - 10);
  const angle = normalizedTemp * 180 + angleOffset;

  const radians = (angle * Math.PI) / 180;
  const radius = 116;

  const translateX = radius * Math.cos(radians);
  const translateY = radius * Math.sin(radians);

  return { translateX, translateY };//this helps us rotate the temperature
};

const setIndicatorPoint = (currTemp) => {
  const position = calculatePointPosition(currTemp);
  svgPoint.style.transform = `translate(${position.translateX}px, ${position.translateY}px)`;
};

// Handle the dropdown data
const roomSelect = document.getElementById("rooms");

const currentTemp = document.getElementById("temp");

let selectedRoom = rooms[0].name;

// Set default temperature
currentTemp.textContent = `${rooms[0].currTemp}°`;

setOverlay(rooms[0]);

document.querySelector(".currentTemp").innerText = `${rooms[0].currTemp}°`;
// Add new options from rooms array
rooms.forEach((room) => {
  const option = document.createElement("option");
  option.value = room.name;
  option.textContent = room.name;
  roomSelect.appendChild(option);
});

// Set current temperature to currently selected room

const setSelectedRoom = (selectedRoom) => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);
  setIndicatorPoint(room.currTemp);

  //   set the current stats to current room temperature
  currentTemp.textContent = `${room.currTemp}°`;

  // Set the current room image
  setOverlay(room);

  // Set the current room name
  document.querySelector(".room-name").innerText = selectedRoom;

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
};

roomSelect.addEventListener("change", function () {
  selectedRoom = this.value;

  setSelectedRoom(selectedRoom);
});


// Set preset temperatures
const defaultSettings = document.querySelector(".default-settings");

defaultSettings.addEventListener("click", function (e) {
  const clickedButton = e.target.closest('button');
  
  if (!clickedButton) return;

  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);
  if (!room) return;

  if (clickedButton.id === "cool") {
    room.setCurrTemp(room.coldPreset);
  } else if (clickedButton.id === "warm") {
    room.setCurrTemp(room.warmPreset);
  }

  setIndicatorPoint(room.currTemp);
  currentTemp.textContent = `${room.currTemp}°`;

  generateRooms();

  setOverlay(room);

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
});

const coolBtn = document.getElementById("cool");
const warmBtn = document.getElementById("warm");

// Increase and decrease temperature
function changeTemperature(isIncrease) {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  if (isIncrease) {
    if (room.currTemp < 32) {
      room.increaseTemp();
    }
  } else {
    if (room.currTemp > 10) {
      room.decreaseTemp();
    }
  }

  setIndicatorPoint(room.currTemp);
  currentTemp.textContent = `${room.currTemp}°`;

  generateRooms();
  
  setOverlay(room);
  
  warmBtn.style.backgroundColor = "#d9d9d9";
  coolBtn.style.backgroundColor = "#d9d9d9";
  
  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
}

document.getElementById("increase").addEventListener("click", () => {
  changeTemperature(true);
});

document.getElementById("reduce").addEventListener("click", () => {
  changeTemperature(false);
});

const inputsDiv = document.querySelector(".inputs");
// Toggle preset inputs
document.getElementById("newPreset").addEventListener("click", () => {
  if (inputsDiv.classList.contains("hidden")) {
    inputsDiv.classList.remove("hidden");
  }
});

// close inputs
document.getElementById("close").addEventListener("click", () => {
  inputsDiv.classList.add("hidden");
  const errorSpan = document.querySelector(".error");
  errorSpan.style.display = "none";
});

// handle preset input data
document.getElementById("save").addEventListener("click", () => {
  const coolInput = document.getElementById("coolInput");
  const warmInput = document.getElementById("warmInput");
  const errorSpan = document.querySelector(".error");

  if (coolInput.value && warmInput.value) {
    // Validate the data
    if (coolInput.value < 10 || coolInput.value > 24) {
      errorSpan.style.display = "block";
      errorSpan.innerText = "Enter valid cool temperatures (10° - 24°)";

      setTimeout(() => {
        errorSpan.style.display = "none";
      }, 5000);
    }

    if (warmInput.value < 25 || warmInput.value > 32) {
      errorSpan.style.display = "block";
      errorSpan.innerText = "Enter valid warm temperatures (25° - 32°)";

      setTimeout(() => {
        errorSpan.style.display = "none";
      }, 5000);
    }
    // Validation passed
    // Set current room's presets
    const currRoom = rooms.find((room) => room.name === selectedRoom);

    let validCoolInput = (coolInput.value >= 10 && coolInput.value <= 24) 
    ? coolInput.value 
    : currRoom.currTemp;

    let validWarmInput = (warmInput.value >= 25 && warmInput.value <= 32) 
    ? warmInput.value 
    : currRoom.currTemp;

    currRoom.setColdPreset(validCoolInput);
    currRoom.setWarmPreset(validWarmInput);

    coolInput.value = "";
    warmInput.value = "";
  }
});

// Rooms Control
// Generate rooms
const generateRooms = () => {
  const roomsControlContainer = document.querySelector(".rooms-control");
  let roomsHTML = "";

  rooms.forEach((room) => {
    roomsHTML += `
    <div class="room-control" id="${room.name}">
      <div class="top">
        <h3 class="room-name">${room.name} - ${room.currTemp}°</h3>
        <button class="switch">
          <ion-icon name="power-outline" class="${
            room.airConditionerOn ? "powerOn" : ""
          }"></ion-icon>
        </button>
      </div>

      ${displayTime(room)}

      <span class="room-status" style="display: ${
        room.airConditionerOn ? "" : "none"
      }">${room.currTemp < 25 ? "Cooling room to: " : "Warming room to: "}${
      room.currTemp
    }°</span>
    </div>`;
  });

  if (rooms.length > 1) {
    const activatedACs = rooms.every(room => room.airConditionerOn);
    
    roomsHTML += `
    <div class="master-ac-container">
      <button id="masterACButton">
        <ion-icon name="power-outline" class="${activatedACs ? 'powerOn' : ''}"></ion-icon>
        ${activatedACs ? 'Turn Off All ACs' : 'Turn On All ACs'}
      </button>
    </div>`;
  }

  roomsControlContainer.innerHTML = roomsHTML;

  const masterACButton = document.getElementById("masterACButton");
  if (masterACButton) {
    masterACButton.addEventListener("click", () => {
      const activatedACs = rooms.every(room => room.airConditionerOn);
      
      rooms.forEach(room => {
        if (room.airConditionerOn !== !activatedACs) {
          room.toggleAircon();
        }
      });
      
      generateRooms(); 
    });
  }
};

const displayTime = (room) => {
  return `
      <div class="time-display">
        <span class="time">${room.startTime}</span>
        <div class="bars">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <span class="time">${room.endTime}</span>
      </div>
  `
}

generateRooms();

document.querySelector(".rooms-control").addEventListener("click", (e) => {
  if (e.target.classList.contains("switch")) {
    const room = rooms.find(
      (room) => room.name === e.target.parentNode.parentNode.id
    );
    room.toggleAircon();
    generateRooms();
  }

  if (e.target.classList.contains("room-name")) {
    setSelectedRoom(e.target.parentNode.parentNode.id);
  }
});

document.getElementById("modalTrigger").addEventListener("click", (e) => {
  const modal = document.getElementById("modalContainer");
    modal.classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", () => {
  const modal = document.getElementById("modalContainer");
  modal.classList.add("hidden");
})

// extracting new room data from modal
function addNewRoom() {
  const roomName = document.getElementById('newRoomName').value.trim();
  const temperature = parseInt(document.getElementById('newCurrentTemperature').value);
  const imageFile = document.getElementById('newRoomImage').files[0];
  
  if (!roomName || isNaN(temperature) || temperature < 10 || temperature > 32) {
    alert('Please enter valid room name and temperature');
    return;
  }
  
  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : './assets/default-home-image.jpg';
  
  const validRoomName = roomName.charAt(0).toUpperCase() + roomName.substring(1).toLowerCase();
  const validTemp = (temperature >= 10 && temperature <= 32) ? temperature : 25;//use room temperature if temperature they give is invalid

  const newRoom = {
    name: validRoomName,
    currTemp: validTemp,
    image: imageUrl,
    coldPreset: 20,
    warmPreset: 32,
    airConditionerOn: false,
    startTime: '16:30',
    endTime: '20:00',

    setCurrTemp(temp) {
      this.currTemp = temp;
    },
    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },
    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },
    decreaseTemp() {
      this.currTemp > 10 ? this.currTemp-- : this.currTemp;
    },
    increaseTemp() {
      this.currTemp < 32 ? this.currTemp++ : this.currTemp;
    },
    toggleAircon() {
      this.airConditionerOn = !this.airConditionerOn;
    }
  };

  rooms.push(newRoom);
  
  const roomSelect = document.getElementById("rooms");
  const option = document.createElement("option");
  option.value = newRoom.name;
  option.textContent = newRoom.name;
  roomSelect.appendChild(option);
  
  selectedRoom = newRoom.name;
  roomSelect.value = newRoom.name;
  
  setSelectedRoom(newRoom.name);
  generateRooms();

  document.getElementById('newRoomName').value = '';
  document.getElementById('newCurrentTemperature').value = '';
  document.getElementById('newRoomImage').value = '';
  document.getElementById('modalContainer').classList.add('hidden');
}

document.getElementById('addRoom').addEventListener('click', addNewRoom);

module.exports = rooms;
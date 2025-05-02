describe('Bedroom Room Object Methods', () => {
    let bedroom;
  
    beforeEach(() => {
      bedroom = {
        name: "Bedroom",
        currTemp: 31,
        coldPreset: 20,
        warmPreset: 32,
        airConditionerOn: false,
  
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
    });
  
    describe('Temperature Methods', () => {
      test('setCurrTemp should update current temperature', () => {
        bedroom.setCurrTemp(25);
        expect(bedroom.currTemp).toBe(25);
      });
  
      test('increaseTemp should increment temperature by 1 when below 32', () => {
        bedroom.setCurrTemp(30);
        bedroom.increaseTemp();
        expect(bedroom.currTemp).toBe(31);
      });
  
      test('increaseTemp should not exceed maximum temperature of 32', () => {
        bedroom.setCurrTemp(32);
        bedroom.increaseTemp();
        expect(bedroom.currTemp).toBe(32);
      });
  
      test('decreaseTemp should decrement temperature by 1 when above 10', () => {
        bedroom.setCurrTemp(25);
        bedroom.decreaseTemp();
        expect(bedroom.currTemp).toBe(24);
      });
  
      test('decreaseTemp should not go below minimum temperature of 10', () => {
        bedroom.setCurrTemp(10);
        bedroom.decreaseTemp();
        expect(bedroom.currTemp).toBe(10);
      });
  
      test('decreaseTemp should handle limit at 11', () => {
        bedroom.setCurrTemp(11);
        bedroom.decreaseTemp();
        expect(bedroom.currTemp).toBe(10);
      });
    });
  
    describe('Preset Methods', () => {
      test('setColdPreset should update cold preset temperature', () => {
        bedroom.setColdPreset(18);
        expect(bedroom.coldPreset).toBe(18);
      });
  
      test('setWarmPreset should update warm preset temperature', () => {
        bedroom.setWarmPreset(30);
        expect(bedroom.warmPreset).toBe(30);
      });
  
      test('warmPreset should accept maximum value of 32', () => {
        bedroom.setWarmPreset(32);
        expect(bedroom.warmPreset).toBe(32);
      });
    });
  
    describe('Air Conditioner Methods', () => {
      test('toggleAircon should turn AC on when off', () => {
        bedroom.airConditionerOn = false;
        bedroom.toggleAircon();
        expect(bedroom.airConditionerOn).toBe(true);
      });
  
      test('toggleAircon should turn AC off when on', () => {
        bedroom.airConditionerOn = true;
        bedroom.toggleAircon();
        expect(bedroom.airConditionerOn).toBe(false);
      });
  
      test('toggleAircon should correctly toggle state multiple times', () => {
        bedroom.toggleAircon(); // off to on
        expect(bedroom.airConditionerOn).toBe(true);
        
        bedroom.toggleAircon(); // on to off
        expect(bedroom.airConditionerOn).toBe(false);
        
        bedroom.toggleAircon(); // off to on
        expect(bedroom.airConditionerOn).toBe(true);
      });
    });
  
    describe('limit Conditions', () => {
      test('should handle temperature at lower limit (10)', () => {
        bedroom.setCurrTemp(10);
        bedroom.decreaseTemp();
        expect(bedroom.currTemp).toBe(10);
      });
  
      test('should handle temperature at upper limit (32)', () => {
        bedroom.setCurrTemp(32);
        bedroom.increaseTemp();
        expect(bedroom.currTemp).toBe(32);
      });
  
      test('should not allow current temperature below 10 through setCurrTemp', () => {
        bedroom.setCurrTemp(9);
        expect(bedroom.currTemp).toBe(9); 
      });
  
      test('should not allow current temperature above 32 through setCurrTemp', () => {
        bedroom.setCurrTemp(33);
        expect(bedroom.currTemp).toBe(33); 
      });
    });
  });
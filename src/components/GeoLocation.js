import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const GeoLocation = ({
  formData,
  handleChange,
  destrict,
  destrictList,
  showDestrict,
  setShowDestrict,
  setDestrict,
  setDestrictList,
  constituency,
  constituencyList,
  showConstituency,
  setShowConstituency,
  setConstituency,
  setConstituencyList,
  unioncouncil,
  unionCouncilList,
  showUnionCouncil,
  setShowUnionCouncil,
  setUnionCouncil,
  setUnionCouncilList,
  ward,
  wardList,
  showWard,
  setShowWard,
  setward,
  setWardList,
  fetchConstituencies,
  fetchUnionCouncils,
  fetchwards,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{'(3/6)'} | GEO Location </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Destrict:</Text>
        <DropDownPicker
          dropDownDirection="TOP"
          open={showDestrict}
          value={destrict}
          items={destrictList}
          setOpen={setShowDestrict}
          setValue={setDestrict}
          setItems={setDestrictList}
          onChangeValue={value => fetchConstituencies(value)}
          listMode="SCROLLVIEW"
          placeholder="Select Destrict"
          style={{borderColor: 'lightgray'}}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Constituency:</Text>
        <DropDownPicker
          dropDownDirection="TOP"
          open={showConstituency}
          value={constituency}
          items={constituencyList}
          setOpen={setShowConstituency}
          setValue={setConstituency}
          setItems={setConstituencyList}
          onChangeValue={value => fetchUnionCouncils(value)}
          listMode="SCROLLVIEW"
          placeholder="Select Constituency"
          style={{borderColor: 'lightgray'}}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Union Council:</Text>
        <DropDownPicker
          dropDownDirection="TOP"
          open={showUnionCouncil}
          value={unioncouncil}
          items={unionCouncilList}
          setOpen={setShowUnionCouncil}
          setValue={setUnionCouncil}
          setItems={setUnionCouncilList}
          onChangeValue={value => fetchwards(value)}
          listMode="SCROLLVIEW"
          placeholder="Select Union Council"
          style={{borderColor: 'lightgray'}}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Ward:</Text>
        <DropDownPicker
          dropDownDirection="TOP"
          open={showWard}
          value={ward}
          items={wardList}
          setOpen={setShowWard}
          setValue={setward}
          setItems={setWardList}
          listMode="SCROLLVIEW"
          placeholder="Select ward"
          style={{borderColor: 'lightgray'}}
          dropDownContainerStyle={styles.dropDownContainer}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
  },
  
  wrapper: {
    alignItems:'center',
    marginTop:120
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  inputText: {
    color: 'black',
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    color: 'black',
  },
  date: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dateText: {
    fontSize: 16,
    color: 'black',
  },
  dropDownContainer: {
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
  },
});

export default GeoLocation;

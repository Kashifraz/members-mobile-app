import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import moment from 'moment';
import Toast from 'react-native-toast-message';


const RegistrationScreen = () => {
  //flags to toggle date pickers and drop downs
  const [showDoB, setShowDoB] = useState(false);
  const [showMembership, setShowMembership] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showDestrict, setShowDestrict] = useState(false);
  const [showConstituency, setShowConstituency] = useState(false);
  const [showUnionCouncil, setShowUnionCouncil] = useState(false);
  const [showWard, setShowWard] = useState(false);
  const [loading, setLoading] = useState(false);

  //drop down selected values
  const [gender, setGender] = useState(null);
  const [destrict, setDestrict] = useState(null);
  const [constituency, setConstituency] = useState(null);
  const [unioncouncil, setUnionCouncil] = useState(null);
  const [ward, setward] = useState(null);

  //drop down lists
  const [genderList, setGenderList] = useState([
    {label: 'Male', value: 1},
    {label: 'Female', value: 2},
  ]);

  const [destrictList, setDestrictList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  // get all Districts
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://213.199.59.195/api/districts');
        if (response.data) {
          const formattedDistricts = response.data.map(d => ({
            label: d.affiliation_title,
            value: d.id,
          }));
          setDestrictList(formattedDistricts);
        } else {
          setDestrictList([]);
        }
      } catch (error) {
        console.error('Error fetching districts:', error);
        Alert.alert('Error', 'Failed to fetch districts');
        setDestrictList([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [constituencyList, setConstituencyList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  const fetchConstituencies = async districtId => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://213.199.59.195/api/district/${districtId}/constituencies`,
      );
      if (response.data) {
        const formattedConstituencies = response.data.map(c => ({
          label: c.constituency_title,
          value: c.id,
        }));
        setConstituencyList(formattedConstituencies);
      } else {
        setConstituencyList([]);
      }
    } catch (error) {
      setConstituencyList([]);
    } finally {
      setLoading(false);
    }
  };

  const [unionCouncilList, setUnionCouncilList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  const fetchUnionCouncils = async constituencyId => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://213.199.59.195/api/constituency/${constituencyId}/unioncouncils`,
      );
      if (response.data) {
        const formattedConstituencies = response.data.map(c => ({
          label: c.union_council_title,
          value: c.id,
        }));
        setUnionCouncilList(formattedConstituencies);
      } else {
        setUnionCouncilList([]);
      }
    } catch (error) {
      setUnionCouncilList([]);
    } finally {
      setLoading(false);
    }
  };

  const [wardList, setWardList] = useState([
    {label: 'no data', value: 'no data '},
  ]);

  const fetchwards = async unionCouncilId => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://213.199.59.195/api/unioncouncil/${unionCouncilId}/wards`,
      );
      if (response.data) {
        const formattedConstituencies = response.data.map(c => ({
          label: c.ward_title,
          value: c.id,
        }));
        setWardList(formattedConstituencies);
      } else {
        setWardList([]);
      }
    } catch (error) {
      setWardList([]);
    } finally {
      setLoading(false);
    }
  };

  //state variables for date input fields
  const [dob, setDob] = useState(new Date());
  const [membershipDate, setMembershipDate] = useState(new Date());

  //handler for date input field
  const onChangeDob = (event, selectedDate) => {
    setShowDoB(false);
    if (selectedDate) {
      setDob(selectedDate);
    }
  };

  const onChangeMDate = (event, selectedDate) => {
    setShowMembership(false);
    if (selectedDate) {
      setMembershipDate(selectedDate);
    }
  };

  //toggling date pickers
  const showDatepickerDoB = () => {
    setShowDoB(true);
  };

  const showDatepickerMembership = () => {
    setShowMembership(true);
  };

  //Textual Form input fields are stored in this state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    fatherName: '',
    cnic: '',
    gender: '',
    geographical_address: '',
    local_jamat: '',
    city: '',
    village: '',
    postal_address: '',
    occupation: '',
    education: '',
    home_phone: '',
    office_phone: '',
    mobile: '',
  });

  //textual input change handler
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToastMessages = (errors) => {
    const errorEntries = Object.entries(errors);
    let delay = 0;

    errorEntries.forEach(([key, value]) => {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `${key}: ${value.join(', ')}`,
        });
      }, delay);
      delay += 1000; // 2 seconds delay between each toast
    });
  };

  //submit the form using register Member api
  const handleSubmit = async () => {
    const member = {
      username: "jodog",
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      name: formData.name,
      father_name: formData.fatherName,
      cnic: formData.cnic,
      dob: dob ? moment(dob).format('YYYY-MM-DD') : null,
      gender: gender,
      membership_date: membershipDate ? moment(membershipDate).format('YYYY-MM-DD') : null,
      affiliations: destrict,
      constituency: constituency,
      union_council: unioncouncil,
      ward: ward,
      geographical_address: formData.geographical_address,
      local_jamat: formData.local_jamat,
      city: formData.city,
      village: formData.village,
      mailing_address: formData.postal_address,
      occupation: formData.occupation,
      education: formData.education,
      home_phone: formData.home_phone,
      office_phone: formData.office_phone,
      mobile_phone: formData.mobile,
    };
    console.log(member);
    try {
      const response = await axios.post('http://213.199.59.195/api/member/store', member);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Member registered successfully',
      });
    } catch (error) {
        const errors = error.response.data;
        showToastMessages(errors);
    }
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#e3f2ff', '#F3FFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <Text style={styles.heading}>{"(1/4)"} | Personal Information</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('email', text)}
            value={formData.email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('password', text)}
            value={formData.password}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('confirmPassword', text)}
            value={formData.confirmPassword}
            secureTextEntry={true}
            placeholder="Confirm your password"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('name', text)}
            value={formData.name}
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Father's Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('fatherName', text)}
            value={formData.fatherName}
            placeholder="Enter your father's name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Gender:</Text>
          <DropDownPicker
            open={showGender}
            value={gender}
            items={genderList}
            setOpen={setShowGender}
            setValue={setGender}
            setItems={setGenderList}
            listMode="SCROLLVIEW"
            placeholder="Select Gender"
            style={{borderColor: 'lightgray'}}
            dropDownContainerStyle={styles.dropDownContainer}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>CNIC:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('cnic', text)}
            value={formData.cnic}
            placeholder="Enter your CNIC"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>DOB</Text>
          <TouchableOpacity onPress={showDatepickerDoB} style={styles.input}>
            <Text style={{color: 'black'}}>{dob.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDoB && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={onChangeDob}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Membership Date:</Text>
          <TouchableOpacity
            onPress={showDatepickerMembership}
            style={styles.input}>
            <Text style={{color: 'black'}}>
              {membershipDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showMembership && (
            <DateTimePicker
              value={membershipDate}
              mode="date"
              display="default"
              onChange={onChangeMDate}
            />
          )}
        </View>
        <Text style={styles.heading}>{"(2/4)"} | GEO Location </Text>
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

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Geographical Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('geographical_address', text)}
            value={formData.geographical_address}
            placeholder="Enter your Geographical Address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name of Local Jamat</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('local_jamat', text)}
            value={formData.local_jamat}
            placeholder="Enter Name of Local Jamat"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>City</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('city', text)}
            value={formData.city}
            placeholder="Enter your city"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Village</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('village', text)}
            value={formData.village}
            placeholder="Enter your village"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Postal Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('mailing_address', text)}
            value={formData.mailing_address}
            placeholder="Enter your Postal Address"
          />
        </View>

        <Text style={styles.heading}>{"(3/4)"} | Occupation / Education</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Occupation</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('occupation', text)}
            value={formData.occupation}
            placeholder="Enter your Occupation"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Education</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('education', text)}
            value={formData.education}
            placeholder="Enter your Education"
          />
        </View>

        

        <Text style={styles.heading}>{"(4/4)"} | Contact Information</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Home Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('home_phone', text)}
            value={formData.home_phone}
            placeholder="Enter your Home Phone"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Office Phone </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('office_phone', text)}
            value={formData.office_phone}
            placeholder="Enter your Office Phone"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Mobile</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleChange('mobile', text)}
            value={formData.mobile}
            placeholder="Enter your mobile"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    marginTop: '100px',
    justifyContent: 'center',
    alignItems: 'center',
  },
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

  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    color: 'black',
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

export default RegistrationScreen;

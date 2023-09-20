import React, {useState} from 'react';
import {
  Modal,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Input = ({
  type,
  label,
  placeholder,
  isPassword,
  value,
  onChangeText,
  style,
  options,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onSelect = opt => {
    onChangeText(opt);
    setPickerModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'picker' ? (
        <Pressable
          onPress={() => setPickerModalVisible(true)}
          style={styles.inputContainer}>
          {value ? (
            <Text style={[styles.input, style]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}

          <Image
            style={styles.arrow}
            source={require('../../assets/img/arrow.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            style={[styles.input, style]}
            {...props}
          />

          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require('../../assets/img/eye.png')
                    : require('../../assets/img/eye_closed.png')
                }
              />
            </Pressable>
          ) : null}
        </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPickerModalVisible(false)}
          style={styles.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options</Text>

            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }

              const selected = value?.id === opt?.id;

              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}>
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: '#4F63AC',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  arrow: {
    width: 20,
    height: 20,
    marginHorizontal: 16,
    transform: [{rotate: '270deg'}],
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: 'grey',
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  headerTitle: {
    marginBottom: 16,
    color: 'black',
    fontSize: 16,
  },
  optionText: {
    color: 'black',
    paddingVertical: 4,
    fontSize: 15,
  },
  selectedOption: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
export default React.memo(Input);

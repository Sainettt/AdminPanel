import React from 'react';
import { View,  Text } from 'react-native';
import { styles } from '../styles/mainStyles';

const WorkLogField = ({ date, startTime, endTime }) => {
    const formatDate = date.split('T');
    return (
        <View style={styles.workLogFieldContainer}>
            <Text style={styles.workLogDate}>{formatDate[0]}</Text>
            <Text style={styles.workLogTime}>{startTime}</Text>
            <Text style={styles.workLogTime}>{endTime}</Text>
        </View>
    )
}
export default WorkLogField;
import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ProgressBar = ({step}) => {
    return (
        <View style={styles.progressBar}>
            <View style={[styles.circle, step >= 0 && styles.circleActive]}>
                <Text style={[styles.insideCircle, step >= 0 && styles.insideCircleActive]}>1</Text>
            </View>

            <View style={[styles.line, step >= 0 && styles.lineActive]}></View>

            <View style={[styles.circle, step >= 1 && styles.circleActive]}>
                <Text style={[styles.insideCircle, step >= 1 && styles.insideCircleActive]}>2</Text>
            </View>

            <View style={[styles.line, step >= 1 && styles.lineActive]}></View>

            <View style={[styles.circle, step >= 2 && styles.circleActive]}>
                <Text style={[styles.insideCircle, step >= 2 && styles.insideCircleActive]}>3</Text>    
            </View>

            <View style={[styles.line, step >= 2 && styles.lineActive]}></View>

            <View style={[styles.circle, step >= 3 && styles.circleActive]}>
                <Text style={[styles.insideCircle, step >= 3 && styles.insideCircleActive]}>4</Text>
            </View>
        </View>
    )
};

export default ProgressBar;
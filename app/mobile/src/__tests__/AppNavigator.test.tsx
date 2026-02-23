import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '../navigation/AppNavigator';

describe('AppNavigator', () => {
    it('renders without crashing and shows Home screen by default', () => {
        const { getByText } = render(
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        );

        // Verify Home screen content is visible by default
        expect(getByText('Soter Mobile')).toBeTruthy();
        expect(getByText('Check Backend Health')).toBeTruthy();
        expect(getByText('View Aid Overview (Coming Soon)')).toBeTruthy();
    });
});

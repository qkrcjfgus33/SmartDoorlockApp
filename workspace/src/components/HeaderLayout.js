import React, {
    Component,
    View,
    Image,
    Text,
    PropTypes
} from 'react-native';

import { TouchButton } from '../components';

export class HeaderLayout extends Component {
    render() {
        let {
            title,
            rightIcon,
            leftIcon,
            onPressRightIcon,
            onPressLeftIcon
        } = this.props;

        return (
            <View>
                <View>
                    <View>
                        <TouchButton value={leftIcon} onPress={onPressLeftIcon} />
                    </View>
                    <View>
                        <Text>{title}</Text>
                    </View>
                    <View>
                        <TouchButton value={rightIcon} onPress={onPressRightIcon} />
                    </View>
                </View>
                <View>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

HeaderLayout.propTypes = {
    title            : PropTypes.string.isRequired,
    rightIcon        : PropTypes.string,
    leftIcon         : PropTypes.string,
    onPressRightIcon : PropTypes.func,
    onPressLeftIcon  : PropTypes.func
}

HeaderLayout.defaultProps = {
    onPressRightIcon : function(){},
    onPressLeftIcon  : function(){}
}

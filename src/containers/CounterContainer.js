import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const mapDispatchToProps = (dispath) => ({
    onIncrement: () => dispath(actions.increment()),
    onDecrement: () => dispath(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispath(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
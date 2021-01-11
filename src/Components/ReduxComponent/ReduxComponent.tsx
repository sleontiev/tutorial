import React from 'react';
import { connect } from 'react-redux'
import { add, sub, addNumber, reset, asyncAdd } from './actions/actions';

interface IProps {
    counter?: number,
    onAdd?(): void|undefined,
    onAddNumber?(number: number): void|undefined,
    onSub?(): void|undefined,
    onReset?(): void|undefined,
    onAsyncAdd?(number: number): void|undefined
}

class ReduxComponent extends React.Component<IProps, {}> {
    render() {
        console.log('REDUX_APP', this.props)
        return (
            <div style={{
                width: '300px',
                margin: '0 auto',
                textAlign: 'center',
            }}>
                <h3>{ this.props.counter }</h3>
                <div style={{
                    marginBottom: '15px'
                }}>
                    <button onClick={this.props.onAdd}>Плюс 1</button>
                    <button onClick={this.props.onSub}>Минус 1</button>
                </div>
                <div style={{
                    marginBottom: '15px'
                }}>
                    <button onClick={() => {if(this.props.onAddNumber) this.props.onAddNumber(13)}}>Плюс 13</button>
                    <button onClick={() => {if(this.props.onAddNumber) this.props.onAddNumber(-17)}}>Минус 17</button>
                </div>
                <div>
                    <button onClick={() => {if(this.props.onAsyncAdd) this.props.onAsyncAdd(25)}}>Асинхронно добавить 25</button>
                </div>
                <button onClick={this.props.onReset}>Сбросить</button>
            </div> 
        )
    }
}

function mapStateToProps(state:any) {
    console.log(state)
    return {
        counter: state.value
    }
}

function mapDispatchToProps(dispatch:any) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (number: number) => dispatch(addNumber(number)),
        onAsyncAdd: (number: number) => dispatch(asyncAdd(number)),
        onReset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent)
import React, {Component} from 'react';

class ErrorBoundary extends Component<{}, {hasError: boolean}> {
    state = {
        hasError: false,
    };
    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    };
    render() {
        if(this.state.hasError) {
            return <h1 style={{color: 'red'}}>Ошибка</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary

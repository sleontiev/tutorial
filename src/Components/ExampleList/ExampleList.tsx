import React from 'react';
import './ExampleList.css';

export default () => {
    return (
        React.createElement(
            'div',
            {className: 'containerTabs'},
            React.createElement(
                'div',
                {className: 'list'},
                React.createElement(
                  'h3',
                  null,
                  'Неупорядоченый список'
                ),
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        'HTML'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'JavaScript'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'React',
                    ),
                ),
                React.createElement(
                    'h3',
                    null,
                    'Упорядоченый список'
                ),
                React.createElement(
                    'ol',
                    null,
                    React.createElement(
                        'li',
                        null,
                        'HTML'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'JavaScript'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'React',
                    ),
                )
            )
        )
    )
}

import React from 'react';
import uuid from 'uuid';
import Notes from './Notes.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
                    task: 'Learn React'
                },
                {
                    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
                    task: 'Do laundry'
                },
                {
                    id: uuid(),
                    task: 'Learn Webpack'
                }
            ]
        };
    }
    render() {
        const {notes} = this.state;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes}/>
            </div>
        );
    }
    // We are using an experimental feature known as property
    // initializer here. It allows us to bind the method `this`
    // to point at our *App* instance.
    //
    // Alternatively we could `bind` at `constructor` using
    // a line, such as this.addNote = this.addNote.bind(this);
    addNote = () => {
        // It would be possible to write this in an imperative style.
        // I.e., through `this.state.notes.push` and then
        // `this.setState({notes: this.state.notes})` to commit.
        //
        // I tend to favor functional style whenever that makes sense.
        // Even though it might take more code sometimes, I feel
        // the benefits (easy to reason about, no side effects)
        // more than make up for it.
        //
        // Libraries, such as Immutable.js, go a notch further.
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid(),
                task: `Task ${uuid()}`
            }])
        });
    }
}

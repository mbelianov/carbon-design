import React from 'react';
import { InlineNotification, ToastNotification } from 'carbon-components-react';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  position: 'fixed',
  bottom: '0px',
  right: '-270px',
  zIndex: '1000'
};

const transitionStyles = {
  entered: {
      transform: 'translateX(-100%)',
      transition: `transform ${duration}ms ease-in-out`
  },
  exiting: {
      transform: 'translateX(100%)',
      transition: `transform ${duration}ms ease-in-out`
  },
  exited: {
      right: '-270px'
  }
}

const Notification = ({ notification }) => {
    return (
        <Transition in={notification} timeout={duration} unmountOnExit>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <ToastNotification
                        title={'Success!'}
                        kind={'success'}
                        subtitle={'You clicked me.'}
                        caption={new Date().toString()}
                    />
                </div>
            )}
        </Transition>
    );
}

export default Notification;
import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import SnackbarContent, { SnackbarContentProps } from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles, Theme } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export interface SnackbarContentWrapperProps {
  className?: string;
  message?: SnackbarContentProps['message'];
  onClose?: () => void;
  variant: keyof typeof variantIcon;
}

function SnackbarContentWrapper(props: SnackbarContentWrapperProps) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export interface CustomSnackBarProps extends SnackbarProps, Omit<SnackbarContentWrapperProps, 'onClose'> {
}

export default function CustomizedSnackbar(props: CustomSnackBarProps) {
  const { variant, message, onClose, ...rest } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={6000}
      onClose={onClose}
      {...rest}
    >
      <SnackbarContentWrapper
        onClose={onClose as any}
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
}

CustomizedSnackbar.newInstance = (properties: CustomSnackBarProps, callback: any) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let called = false;
  function ref(snackbar: typeof CustomizedSnackbar) {
    if (called) {
      return;
    }
    called = true;
    callback({
      component: snackbar,
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode!.removeChild(div);
      },
    });
  }
  ReactDOM.render(<CustomizedSnackbar {...properties} ref={ref} />, div);
}

// TODO: static method to render
// ref: https://github.com/react-component/notification
//      https://github.com/ant-design/ant-design/blob/master/components/notification/index.tsx

// export const snackbar = {
//   success: (message: string) => {
//     CustomizedSnackbar.newInstance({ message, variant: 'success' }, (snackbar) => {
//       snackbar
//     });
//   },
//   warning: (message: string) => {

//   },
//   error: (message: string) => {

//   },
//   info: (message: string) => {

//   },
// }

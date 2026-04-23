function varargout = kalulatorfinish(varargin)
% KALULATORFINISH MATLAB code for kalulatorfinish.fig
%      KALULATORFINISH, by itself, creates a new KALULATORFINISH or raises the existing
%      singleton*.
%
%      H = KALULATORFINISH returns the handle to a new KALULATORFINISH or the handle to
%      the existing singleton*.
%
%      KALULATORFINISH('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in KALULATORFINISH.M with the given input arguments.
%
%      KALULATORFINISH('Property','Value',...) creates a new KALULATORFINISH or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before kalulatorfinish_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to kalulatorfinish_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help kalulatorfinish

% Last Modified by GUIDE v2.5 22-Jan-2023 16:16:33

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @kalulatorfinish_OpeningFcn, ...
                   'gui_OutputFcn',  @kalulatorfinish_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before kalulatorfinish is made visible.
function kalulatorfinish_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to kalulatorfinish (see VARARGIN)

% Choose default command line output for kalulatorfinish
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes kalulatorfinish wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = kalulatorfinish_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;



function txthasil_Callback(hObject, eventdata, handles)
% hObject    handle to txthasil (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of txthasil as text
%        str2double(get(hObject,'String')) returns contents of txthasil as a double


% --- Executes during object creation, after setting all properties.
function txthasil_CreateFcn(hObject, eventdata, handles)
% hObject    handle to txthasil (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in numer7.
function numer7_Callback(hObject, eventdata, handles)
% hObject    handle to numer7 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','7') ;
else
textString =strcat(textString,'7');
set(handles.txthasil,'String',textString);
end
jj=0;

% --- Executes on button press in numer8.
function numer8_Callback(hObject, eventdata, handles)
% hObject    handle to numer8 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','8') ;
else
textString =strcat(textString,'8');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in numer9.
function numer9_Callback(hObject, eventdata, handles)
% hObject    handle to numer9 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','9') ;
else
textString =strcat(textString,'9');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in razy.
function razy_Callback(hObject, eventdata, handles)
% hObject    handle to razy (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString =strcat(textString,'*');
set(handles.txthasil,'String',textString)

% --- Executes on button press in numer4.
function numer4_Callback(hObject, eventdata, handles)
% hObject    handle to numer4 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','4') ;
else
textString =strcat(textString,'4');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in numer5.
function numer5_Callback(hObject, eventdata, handles)
% hObject    handle to numer5 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','5') ;
else
textString =strcat(textString,'5');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in numer6.
function numer6_Callback(hObject, eventdata, handles)
% hObject    handle to numer6 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','6') ;
else
textString =strcat(textString,'6');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in dzielenie.
function dzielenie_Callback(hObject, eventdata, handles)
% hObject    handle to dzielenie (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString =strcat(textString,'/');
set(handles.txthasil,'String',textString)

% --- Executes on button press in numer1.
function numer1_Callback(hObject, eventdata, handles)
% hObject    handle to numer1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','1') ;
else
textString =strcat(textString,'1');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in numer2.
function numer2_Callback(hObject, eventdata, handles)
% hObject    handle to numer2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','2') ;
else
textString =strcat(textString,'2');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in numer3.
function numer3_Callback(hObject, eventdata, handles)
% hObject    handle to numer3 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','3') ;
else
textString =strcat(textString,'3');
set(handles.txthasil,'String',textString);
end
jj=0;


% --- Executes on button press in dodawanie.
function dodawanie_Callback(hObject, eventdata, handles)
% hObject    handle to dodawanie (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString =strcat(textString,'+');
set(handles.txthasil,'String',textString)

% --- Executes on button press in clear.
function clear_Callback(hObject, eventdata, handles)
% hObject    handle to clear (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
set(handles.txthasil,'String','') ;
set(handles.numer2,'enable', 'on'); %2
set(handles.numer3,'enable', 'on'); %3
set(handles.numer4,'enable', 'on');%4
set(handles.numer5,'enable', 'on');%5
set(handles.numer6,'enable', 'on');%6
set(handles.numer7,'enable', 'on');%7
set(handles.numer8,'enable', 'on');%8
set(handles.numer9,'enable', 'on');%9
set(handles.razy,'enable', 'on'); %mnozenie
set(handles.dzielenie,'enable', 'on'); %dzielenie
set(handles.dodawanie,'enable', 'on'); %dodawanie
set(handles.odejmowanie,'enable', 'on'); %odejmowanie
set(handles.potega,'enable', 'on'); %potega
set(handles.sinus,'enable', 'on'); %sin
set(handles.cosinus,'enable', 'on'); %cos
set(handles.tangan,'enable', 'on'); %tang
set(handles.pi,'enable', 'on'); %pi
set(handles.poin,'enable', 'on'); %kropa
set(handles.pojcudywslow,'enable', 'off'); %pojcudyslow
set(handles.desimal,'enable', 'on')
set(handles.hexa,'enable', 'on')
set(handles.biner,'enable', 'on')
% --- Executes on button press in zero.
function zero_Callback(hObject, eventdata, handles)
% hObject    handle to zero (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global jj
textString = get(handles.txthasil,'String');
if(strcmp(textString,'0.')==1)&&(jj==0)
set(handles.txthasil,'String','0') ;
else
textString =strcat(textString,'0');
set(handles.txthasil,'String',textString);
end
jj=0;

% --- Executes on button press in rowna.
function rowna_Callback(hObject, eventdata, handles)
% hObject    handle to rowna (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
if isempty(textString)
    msgbox('Silahkan masukkan inputan terlebih dahulu','peringatan','warn');
    return;
end
textString = eval(textString)
set(handles.txthasil,'String',textString);

% --- Executes on button press in odejmowanie.
function odejmowanie_Callback(hObject, eventdata, handles)
% hObject    handle to odejmowanie (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString =strcat(textString,'-');
set(handles.txthasil,'String',textString)


% --- Executes on button press in sinus.
function sinus_Callback(hObject, eventdata, handles)
% hObject    handle to sinus (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'sin(pi/180*');
set(handles.txthasil,'String',textString);

% --- Executes on button press in cosinus.
function cosinus_Callback(hObject, eventdata, handles)
% hObject    handle to cosinus (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'cos(pi/180*');
set(handles.txthasil,'String',textString);

% --- Executes on button press in tangan.
function tangan_Callback(hObject, eventdata, handles)
% hObject    handle to tangan (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'tan(pi/180*');
set(handles.txthasil,'String',textString);

% --- Executes on button press in pi.
function pi_Callback(hObject, eventdata, handles)
% hObject    handle to pi (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
piValue = pi;
newValue = strcat(textString, num2str(piValue));
set(handles.txthasil, 'String', newValue);

% --- Executes on button press in potega.
function potega_Callback(hObject, eventdata, handles)
% hObject    handle to potega (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'^');
set(handles.txthasil,'String',textString);


% --- Executes on button press in poin.
function poin_Callback(hObject, eventdata, handles)
% hObject    handle to poin (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'.');
set(handles.txthasil,'String',textString);


% --- Executes on button press in pojcudywslow.
function pojcudywslow_Callback(hObject, eventdata, handles)
% hObject    handle to pojcudywslow (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textStringv1 = get(handles.txthasil,'String');
textString = ('''');
textString = strcat(textStringv1, textString);
set(handles.txthasil,'String',textString);

% --- Executes on button press in desimal.
function desimal_Callback(hObject, eventdata, handles)
% hObject    handle to desimal (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'dec2hex(');
set(handles.txthasil,'String',textString);
set(handles.numer2,'enable', 'off'); %2
set(handles.numer3,'enable', 'off'); %3
set(handles.numer4,'enable', 'off');%4
set(handles.numer5,'enable', 'off');%5
set(handles.numer6,'enable', 'off');%6
set(handles.numer7,'enable', 'off');%7
set(handles.numer8,'enable', 'off');%8
set(handles.numer9,'enable', 'off');%9
set(handles.razy,'enable', 'off'); %mnozenie
set(handles.dzielenie,'enable', 'off'); %dzielenie
set(handles.dodawanie,'enable', 'off'); %dodawanie
set(handles.odejmowanie,'enable', 'off'); %odejmowanie
set(handles.potega,'enable', 'off'); %potega
set(handles.sinus,'enable', 'off'); %sin
set(handles.cosinus,'enable', 'off'); %cos
set(handles.tangan,'enable', 'off'); %tang
set(handles.pi,'enable', 'off'); %pi
set(handles.poin,'enable', 'off'); %kropa
set(handles.hexa,'enable', 'off')
set(handles.biner,'enable', 'off')

set(handles.pojcudywslow,'enable', 'on'); %pojcudyslow


% --- Executes on button press in hexa.
function hexa_Callback(hObject, eventdata, handles)
% hObject    handle to hexa (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'dec2bin(');
set(handles.txthasil,'String',textString);
set(handles.numer2,'enable', 'off'); %2
set(handles.numer3,'enable', 'off'); %3
set(handles.numer4,'enable', 'off');%4
set(handles.numer5,'enable', 'off');%5
set(handles.numer6,'enable', 'off');%6
set(handles.numer7,'enable', 'off');%7
set(handles.numer8,'enable', 'off');%8
set(handles.numer9,'enable', 'off');%9
set(handles.razy,'enable', 'off'); %mnozenie
set(handles.dzielenie,'enable', 'off'); %dzielenie
set(handles.dodawanie,'enable', 'off'); %dodawanie
set(handles.odejmowanie,'enable', 'off'); %odejmowanie
set(handles.potega,'enable', 'off'); %potega
set(handles.sinus,'enable', 'off'); %sin
set(handles.cosinus,'enable', 'off'); %cos
set(handles.tangan,'enable', 'off'); %tang
set(handles.pi,'enable', 'off'); %pi
set(handles.poin,'enable', 'off'); %kropa
set(handles.pojcudywslow,'enable', 'on'); %pojcudyslow
set(handles.desimal,'enable', 'off')
set(handles.biner,'enable', 'off')



% --- Executes on button press in biner.
function biner_Callback(hObject, eventdata, handles)
% hObject    handle to biner (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'bin2dec(''');
set(handles.txthasil,'String',textString);
set(handles.numer2,'enable', 'off'); %2
set(handles.numer3,'enable', 'off'); %3
set(handles.numer4,'enable', 'off');%4
set(handles.numer5,'enable', 'off');%5
set(handles.numer6,'enable', 'off');%6
set(handles.numer7,'enable', 'off');%7
set(handles.numer8,'enable', 'off');%8
set(handles.numer9,'enable', 'off');%9
set(handles.razy,'enable', 'off'); %mnozenie
set(handles.dzielenie,'enable', 'off'); %dzielenie
set(handles.dodawanie,'enable', 'off'); %dodawanie
set(handles.odejmowanie,'enable', 'off'); %odejmowanie
set(handles.potega,'enable', 'off'); %potega
set(handles.sinus,'enable', 'off'); %sin
set(handles.cosinus,'enable', 'off'); %cos
set(handles.tangan,'enable', 'off'); %tang
set(handles.pi,'enable', 'off'); %pi
set(handles.poin,'enable', 'off'); %kropa
set(handles.pojcudywslow,'enable', 'on'); %pojcudyslow
set(handles.desimal,'enable', 'off')
set(handles.hexa,'enable', 'off')

% --- Executes on button press in nawias1.
function nawias1_Callback(hObject, eventdata, handles)
% hObject    handle to nawias1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'(');
set(handles.txthasil,'String',textString);

% --- Executes on button press in zamykajacy1.
function zamykajacy1_Callback(hObject, eventdata, handles)
% hObject    handle to zamykajacy1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,')');
set(handles.txthasil,'String',textString);

% --- Executes during object creation, after setting all properties.
function uipanel1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to uipanel1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called


% --- Executes on button press in procent.
function procent_Callback(hObject, eventdata, handles)
% hObject    handle to procent (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString = strcat(textString,'%');
set(handles.txthasil,'String',textString);


% --- Executes on button press in delpoj.
function delpoj_Callback(hObject, eventdata, handles)
% hObject    handle to delpoj (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
newValue = textString(1:end-1);
set(handles.txthasil,'String',newValue);


% --- Executes on button press in pierwiastek.
function pierwiastek_Callback(hObject, eventdata, handles)
% hObject    handle to pierwiastek (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
textString = get(handles.txthasil,'String');
textString=str2double(textString);
pierwiastek = sqrt(textString);
newValue = strcat(textString, num2str(pierwiastek));
set(handles.txthasil, 'String', newValue);


% --------------------------------------------------------------------
function uipanel1_ButtonDownFcn(hObject, eventdata, handles)
% hObject    handle to uipanel1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% --- Executes on button press in logarytm.
function logarytm_Callback(hObject, eventdata, handles)
% hObject    handle to logarytm (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

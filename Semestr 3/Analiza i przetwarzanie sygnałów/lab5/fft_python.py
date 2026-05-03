import numpy as np

def radix2fft(x):
    N = len(x)

    if N == 1:
        return x

    even = radix2fft(x[0::2])
    odd = radix2fft(x[1::2])

    W = np.exp(-2j * np.pi * np.arange(N // 2) / N)
    t = W * odd

    return np.concatenate([even + t, even - t])

# Test programu
N = 8
x = np.arange(N)

# Przestawianie probek sygnalu (odwracanie bitow numeru probki)
n = np.arange(N)
m = np.flipud(np.array(list(np.binary_repr(n, width=int(np.log2(N)))))).astype(int)
m = np.packbits(m, axis=-1)
y = x[m]

# Wywołanie algorytmu FFT
y_fft = radix2fft(y)

# Porównanie wyników z funkcją FFT z biblioteki numpy
fft_numpy = np.fft.fft(x)
error = np.max(np.abs(y_fft - fft_numpy))

print("Oryginalny sygnał:", x)
print("Przestawione probki sygnalu:", y)
print("Wynik FFT (algorytm radix-2 DIT):", y_fft)
print("Wynik FFT (numpy):", fft_numpy)
print("Błąd:", error)

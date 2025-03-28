def flatten_object(obj):
    def helper(obj, path='', result={}):
        for key in obj:
            new_key = f'{path}.{key}' if path else key

            if isinstance(obj[key], dict) and obj[key] != None:
                helper(obj[key], new_key, result)
            else:
                result[new_key] = obj[key]
        return result
    return helper(obj)


# Test Cases
print(flatten_object({'a': {'b': {'c': 1}, 'd': 2}})) # {'a.b.c': 1, 'a.d': 2}
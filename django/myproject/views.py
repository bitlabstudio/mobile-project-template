from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class CurrentVersionView(APIView):
    permission_classes = (AllowAny, )

    def get(self, request, *args, **kwargs):
        result = {
            'CURRENT_VERSION': 1,
            'COMPATIBLE_VERSION': 1,
        }
        return Response(result, status=status.HTTP_200_OK)
